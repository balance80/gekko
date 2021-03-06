const cache = require('../state/cache');
const gekkoManager = cache.get('gekkos');

// stops a Gekko
// requires a post body with an id
module.exports = async function (ctx) {

  let id = ctx.request.body.id;

  if(!id) {
    ctx.body = { status: 'not ok' }
    return;
  }

  let result = gekkoManager.command(id, {
    name: 'forceSell'
  });

  if(!result) {
    ctx.body = { status: 'not ok' }
    return;
  }

  ctx.body = { status: 'ok' };
}
