const assert = require('assert');
const SystemUtil = require('../../src/modules/system/system_util');

describe('#system util test', function () {
  it('test configuration extraction', () => {
    const systemUtil = new SystemUtil({
      root: 'test123',
      root2: undefined,
      webserver: {
<<<<<<< HEAD
        test: 8090
      }
=======
        test: 8080,
      },
>>>>>>> 572ee16d2e6585ff006f6e0652bd508c310a607e
    });

    assert.equal(systemUtil.getConfig('webserver.test'), 8090);
    assert.equal(systemUtil.getConfig('root'), 'test123');
    assert.equal(systemUtil.getConfig('UNKONWN', 'test'), 'test');
    assert.equal(systemUtil.getConfig('UNKONWN'), undefined);
    assert.equal(systemUtil.getConfig('root2', 'test'), 'test');
  });
});
