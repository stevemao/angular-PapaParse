'use strict'

describe 'Service: Papa', ->

  # load the service's module
  beforeEach module 'ngPapaParse'

  # instantiate service
  Papa = {}

  beforeEach inject (_Papa_) ->
    Papa = _Papa_

  it 'should expose Papa', ->
    expect(Papa.BAD_DELIMITERS).not.toBe undefined
