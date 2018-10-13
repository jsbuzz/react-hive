const Control = {
  actor: null,
  withActor : (actor, ns) => { Control.actor = actor; return ns; },
  registerListener : (eventPool, eventName, listener) => {
    (
      Control.actor.__listeners || (Control.actor.__listeners = [])
    ).push({ eventPool, eventName, listener });
  },
  cleanup : (actor) => {
    if (!actor.__listeners) return ;

    actor.__listeners.forEach(({ eventPool, eventName, listener }) => {
      eventPool.removeEventListener(eventName, listener);
    });
  },
  triggerSync : (hiveEvent) => {
    console.log(Control.actor.displayName, 'triggered', hiveEvent.name);
  },
  callback : (actor, fn) => {
    console.log('-->', actor.displayName, 'calling', fnName(fn));
  },
}

export default Control;

function fnName(fn) {
  if (fn.name) return fn.name;

  const def = fn.toString().match(/_this2\.([a-zA-Z_$]+)\(/i);

  return def.length > 1 ? `'${def[1]}'` : 'inline callback';
}
