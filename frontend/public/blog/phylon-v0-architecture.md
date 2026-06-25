# Phylon v0: Designing a Bit-Exact Artificial Life Engine in Rust

*June 25, 2026 · 6 min read*

---

## Why Reproducibility Is Non-Negotiable in Scientific Simulation

When you run a physics simulation and get a result, the result needs to be the same every time — across machines, operating systems, and time. This is not a luxury. It is the foundation of science.

In most ALife software, this requirement is quietly abandoned. Floating-point operations are not deterministic across platforms by default. The same `f64` multiplication can produce different bit-patterns on an Intel CPU versus an ARM chip when compiler optimizations are involved. For a casual game, this does not matter. For a scientific platform designed to produce reproducible results and support peer review, it is fatal.

**Phylon enforces bit-exact reproducibility as a first-class design constraint.**

---

## The Core Mechanism: Fixed-Timestep Update Loop

Phylon's simulation loop never uses wall-clock time for physics updates. Instead, it uses a **fixed-timestep accumulator pattern**:

```rust
const TICK_DT: f64 = 1.0 / 60.0; // deterministic 60 Hz tick

loop {
    accumulator += real_elapsed;
    while accumulator >= TICK_DT {
        world.tick(TICK_DT);
        accumulator -= TICK_DT;
    }
    renderer.interpolate(accumulator / TICK_DT);
}
```

This means the simulation state is entirely independent of frame rate. Two runs with identical seeds will always reach the same state after *n* ticks, regardless of the hardware they run on.

---

## Avoiding Floating-Point Non-Determinism

Rust's `f64` arithmetic is deterministic *within* a single run, but **cross-platform bit-exactness** requires additional care:

- **No `f64::sin` / `f64::cos` in hot paths.** These use libm, which varies by platform. Phylon uses a lookup table for trigonometric approximations in agent movement.
- **No SIMD auto-vectorization in critical simulation paths.** SIMD lane widths differ between AVX-512 and NEON. We disable it selectively with `#[target_feature(disable = "...")]`.
- **All RNG is `ChaCha8Rng` from the `rand` crate**, seeded explicitly. No `thread_rng()` ever touches simulation state.

---

## The 30-Crate DAG Workspace

Phylon's workspace is structured as a strict **Directed Acyclic Graph** of 30 crates:

```
app
├── phylon-renderer (wgpu, WASM)
├── phylon-sim
│   ├── phylon-brain (neural network)
│   ├── phylon-genetics (genome, mutation)
│   ├── phylon-ecology (chemical economy)
│   ├── phylon-world (ECS world, spatial chunking)
│   └── phylon-physics (rigid-body, fixed-point)
├── phylon-analytics
└── phylon-replay (deterministic snapshot/replay)
```

The strict DAG means no circular dependencies, clean compile boundaries, and parallel compilation across crates. A change to `phylon-brain` only recompiles the crates that depend on it, not the full workspace.

---

## The Chemical Economy

Every organism in Phylon participates in a closed chemical economy involving four molecules:

| Molecule | Role |
|----------|------|
| Glucose  | Primary energy substrate |
| O₂       | Required for aerobic respiration |
| CO₂      | Metabolic waste product |
| ATP      | Universal energy currency |

The energy balance equation per tick is:

$$E_{ATP} = \eta \cdot \Delta[Glucose] \cdot f_{day}(t) - C_{movement} - C_{neural}$$

where $f_{day}(t)$ is the day/night function:

$$f_{day}(t) = \frac{1 + \cos\left(\frac{2\pi t}{T_{day}}\right)}{2}$$

This creates natural ecological pressure: organisms that cannot acquire enough ATP during the night die. This is not hand-coded — it emerges from the thermodynamic constraints of the simulation.

---

## Performance Target: 100,000 Organisms at 60 Hz

The current target is 100,000 active organisms at a strict 60 Hz tick rate. The bottlenecks and solutions:

- **Spatial query** — Solved by a hierarchical chunk grid (256×256 unit cells). Only organisms in neighboring chunks interact.
- **Neural evaluation** — GPU-parallelized via `wgpu` compute shaders. All 100k neural networks evaluated in a single shader dispatch.
- **Chemical diffusion** — Also GPU-computed. Three independent diffusion fields (Food, Toxin, Pheromone) solved as sparse convolutions on the chunk grid.

---

## What Comes Next

Phylon v0 covers the core simulation loop, genetics, and basic neural agents. Upcoming milestones:

- **v0.1** — L-System morphology: organisms grow physical bodies (heads, muscles, fins) according to their HoxSequence genome
- **v0.2** — Predator/prey chemical signaling via pheromone fields
- **v1.0 alpha** — Public release with a WASM-based web viewer for visualizing live simulations in the browser

---

*This post is part of the Phylon research log. All findings are preliminary and subject to change as the simulation matures.*
