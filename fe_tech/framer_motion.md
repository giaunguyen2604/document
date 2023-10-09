## Framer Motion Layout

- You can animate a `motion` component between `distinct layouts` by setting the layout prop to `true`. 
- This will result in what we call a `layout animation`.

Explain the word `layout` here:
- Position-related, such as CSS `flex`, `position` or `grid`
- Size-related, such as CSS `width` or `height`
- Position of an element within a list (sorting/reordering a list)

- `layout` property:
  - **layout="position":** we only smoothly transition the position-related properties. Size-related properties will transition abruptly.
  - **layout="size":** we only smoothly transition the size-related properties. Position-related properties will transition abruptly.

  ![image1](/images/framer_motion/image1.png)

`layoutId`: tells Framer Motion that these components are related and need to transition from one instance to the newly "active" one when the user clicks on a new item.

