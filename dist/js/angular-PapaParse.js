'use strict';

/**
 * @ngdoc overview
 * @name ngPapaParse
 * @description
 * # ngPapaParse
 *
 * Main module of the application.
 */
angular.module('ngPapaParse', []);

(function() {
  'use strict';

  /**
    * @ngdoc service
    * @name ngPapaParse.Papa
    * @description
    * # Papa
    * Factory in the ngPapaParse.
   */
  angular.module('ngPapaParse').factory('Papa', function() {
    if (typeof Papa === 'undefined') {
      throw new Error('angular-PapaParse\'s JavaScript requires PapaParse');
    }
    return Papa;
  });

}).call(this);
