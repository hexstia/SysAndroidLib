import mitt from 'mitt';

/**
*  // fire an event 注册事件
*  emitter.emit('foo', { a: 'b' })
*   // listen to an event 监听事件
*   emitter.on('foo', e => console.log('foo', e) )
*
*/
export default new mitt();