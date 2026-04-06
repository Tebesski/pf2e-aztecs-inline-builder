# PF2e Aztec's Inline Builder

This module provides with a graphical UI for generating and inserting Pathfinder 2e inline syntax directly into text fields.

![1](https://github.com/user-attachments/assets/2158cc77-f9f0-463a-bcf4-410a32b13b3d)

## How to Use
Press **`Alt + B`** to summon the builder (you can even use it while editing text). Build your inline link and click Copy to copy it into the clipboard, or Insert to insert the syntax directly at your cursor's location.

## Core Features
Generates formatted inline links for:
* **Checks & Saves:** Skill checks, custom Lore, Saving Throws, and Flat Checks.
* **Damage Rolls:** Complex damage formulas including multiple types, precision/splash modifiers, and material traits.
* **Templates:** Bursts, cones, emanations, and lines with custom distances.
* **Actions & Conditions:** Links to specific actions, actions variants, and quick Conditions insert as well.
* **Advanced Options:** Configurable DCs (Fixed, Level-based, Origin, or Defense), visibility settings, traits, etc.

## Settings
Client-side settings allow you to customize the workflow:
* Automatically copy inserted syntax to your clipboard.
* Automatically close the window after inserting or copying syntax.

## Supported Languages
* English
* Russian (Русский)
* Ukrainian (Українська)

## Installation
In Foundry VTT, go to the **Add-on Modules** tab, click **Install Module**, and paste the following into the **Manifest URL** field:
```text
[https://github.com/Tebesski/pf2e-aztecs-inline-builder/releases/latest/download/module.json](https://github.com/Tebesski/pf2e-aztecs-inline-builder/releases/latest/download/module.json)
