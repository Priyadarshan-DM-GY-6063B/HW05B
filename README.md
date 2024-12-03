# Interactive Wave and Particle System

This project creates an interactive visual experience featuring dynamic waves and particles that respond to the mouse's movement. The sketch is inspired by Yoko Ono's Fluxus instructions, reinterpreted to create a visual experience that evolves over time with mouse input.

## Selected Yoko Ono Poem/Event Score

For this project, I chose the following piece from *Grapefruit* by Yoko Ono:

**Painting to Be Stepped On (1960)**

> *Leave a piece of canvas or finished painting on the floor or in the street.*  
> *Invite people to step on it.*

This instruction inspired the project's focus on interaction and evolving visuals. Just as Ono's piece invites viewers to become part of the artwork through physical interaction, this sketch evolves based on user input, making the viewer an essential part of the experience.

## Features

- **Dynamic Background**: The background color changes smoothly based on time, with subtle noise-driven transitions.
- **Interactive Waves**: Waves' frequency and amplitude change as you move the mouse horizontally, creating a fluid and responsive visual effect.
- **Particles**: Particles are spawned by mouse clicks and exhibit a repulsive force near the mouse while fading away over time.
- **Gradient Effect**: The background features a smooth gradient transition between colors, providing an aesthetic and dynamic backdrop.

## How it Works

- The waves are generated based on the mouse's horizontal position (`mouseX`), which controls the frequency and amplitude of the sine wave used to draw them. Moving the mouse from left to right gradually transitions from a straight line to a sinusoidal wave visualization.
- Particles are created each time the user clicks the mouse. These particles are affected by a repulsion force when near the mouse cursor and fade away over time.
- The background hue continuously changes, creating an evolving color effect further modified by random noise.

## Controls

- **Mouse Movement**: Controls the frequency and amplitude of the waves.
- **Mouse Click**: Spawns particles at the mouse position, which then interact with the mouse movement.
