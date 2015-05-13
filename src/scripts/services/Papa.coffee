'use strict'

###*
 # @ngdoc service
 # @name ngPapaParse.Papa
 # @description
 # # Papa
 # Factory in the ngPapaParse.
###
angular.module 'ngPapaParse'
  .factory 'Papa', ->
    # Service logic
    # ...

    if (typeof Papa == 'undefined')
      throw new Error('angular-PapaParse\'s JavaScript requires PapaParse')


    # Public API here
    Papa
