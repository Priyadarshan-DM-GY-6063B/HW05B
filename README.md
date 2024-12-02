# Interactive Wave and Particle System

This project creates an interactive visual experience featuring dynamic waves and particles that respond to the mouse's movement. The sketch is based on Yoko Ono's Fluxus instructions, reinterpreted to create a visual experience that evolves over time with mouse input.

## Features
- **Dynamic Background**: The background color changes smoothly based on time, with subtle noise-driven transitions.
- **Interactive Waves**: Waves' frequency and amplitude change as you move the mouse horizontally, creating a fluid and responsive visual effect.
- **Particles**: Particles are spawned by mouse clicks, and they exhibit a repulsive force near the mouse while fading away over time.
- **Gradient Effect**: The background features a smooth gradient transition between colors, providing an aesthetic and dynamic backdrop.

## How it Works
- The waves are generated based on the mouse's horizontal position (`mouseX`), which controls the frequency and amplitude of the sine wave used to draw the waves like when we are in the left side it visualizes as an curve line in a straight manner but when we get to the right it gradually creates a sinusoidal wave kind of visualization.
- The particles are created each time the user clicks the mouse. The particles are affected by a repulsion force when they get near the mouse cursor and gradually fade away over time.
- The background hue continuously changes, creating an evolving color effect that is further modified by random noise.

## Controls
- **Mouse Movement**: Controls the frequency and amplitude of the waves.
- **Mouse Click**: Spawns particles at the mouse position, which then interact with the mouse movement.


