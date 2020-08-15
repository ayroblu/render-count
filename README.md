React Render Counting
=====================

This is an investigation of how often render's happen in react in different circumstances

Use cases
---------
### To memo or not to memo
- Without memo, a change in a parent component will trigger a rerender of the whole tree
  - In a naive implementation, this is probably the whole tree every render
- Passing a "child" using html syntax (`<div><Child /></div>`) means it will never be memoised, and will always rerender again, same a changing object reference.

> Decison: Memoize all components

### Local state
1. Does it rerender the parent
  - No
2. Does it rerender the children
  - See memo
3. Does it rerender the siblings
  - No

### Context
1. 1,2,3 Same as local state
2. Does it rerender when the parent changes
  - Yes
3. Does it rerender when context is changed
  - Yes
4. Does it rerender when a different context is changed?
  - No
5. Does it rerender when local state is changed on another component
  - No

Note that the store component takes a children prop, so you can memoise to stop the unnecessary state change that forces every child to update

Notes
-----
Double rendering caused by "Strict Mode" component
- https://medium.com/@andreasheissenberger/react-components-render-twice-any-way-to-fix-this-91cf23961625
