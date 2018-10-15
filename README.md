# EventHive for React
Add a layer of communication on top of your UI - abstract your business logic with event flows.

# Redux
  - state only
  - lots of boilerplate
  - reducers are painful
  - dispatch...
  - no way of type-checking actions

# EventHive
  - events AND global state
  - reduced boilerplate
  - type-checked events


# Events vs state

state is less portable, harder to make universally working components. Events are open ended, components can be tested with full communication in complete isolation.

Also redux with its immutable state manipulation is very safe but on the cost of performance.

With events we can define flows, and components can do operations after a flow is complete. It is cleaner to debug events when we can see all components responding to them and we can see how the state changed.
