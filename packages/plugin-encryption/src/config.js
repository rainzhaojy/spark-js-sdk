/**!
 *
 * Copyright (c) 2015-2016 Cisco Systems, Inc. See LICENSE file.
 * @private
 */

export default {
  encryption: {
    joseOptions: {
      compact: true,
      contentAlg: `A256GCM`,
      protect: `*`
    },

    kmsInitialTimeout: 6000,

    kmsMaxTimeout: 32000,

    /**
     * Debounce wait before sending a kms request
     * @type {Number}
     */
    batcherWait: 50,

    /**
     * Maximum queue size before sending a kms request
     * @type {Number}
     */
    batcherMaxCalls: 50,

    /**
     * Debounce max wait before sending a kms metric
     * @type {Number}
     */
    batcherMaxWait: 150
  }
};
