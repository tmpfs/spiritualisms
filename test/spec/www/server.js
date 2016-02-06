var expect = require('chai').expect
  , request = require('request')
  , Quote = require('../../../lib/model/quote');

describe('www:', function() {

  it('should GET website home page', function(done) {
    var opts = {
      url: process.env.WWW
    }
    request(opts, function(err, res) {
      expect(err).to.eql(null);
      expect(res.statusCode).to.eql(200);
      done(); 
    })
  })

  it('should GET browser home page', function(done) {
    var opts = {
      url: process.env.WWW + '/home'
    }
    request(opts, function(err, res) {
      expect(err).to.eql(null);
      expect(res.statusCode).to.eql(200);
      done(); 
    })
  })

  it('should GET why page', function(done) {
    var opts = {
      url: process.env.WWW + '/why'
    }
    request(opts, function(err, res) {
      expect(err).to.eql(null);
      expect(res.statusCode).to.eql(200);
      done(); 
    })
  })

  it('should GET explore page', function(done) {
    var opts = {
      url: process.env.WWW + '/explore'
    }
    request(opts, function(err, res) {
      expect(err).to.eql(null);
      expect(res.statusCode).to.eql(200);
      done(); 
    })
  })

  it('should GET quotation page', function(done) {
    var quote = new Quote();
    quote.list({}, function(err, res, body) {
      expect(err).to.eql(null);
      expect(body).to.be.an('object');
      var opts = {
        url: process.env.WWW + '/explore/' +  body.rows[0].id
      }
      request(opts, function(err, res) {
        expect(err).to.eql(null);
        expect(res.statusCode).to.eql(200);
        done(); 
      })
    })
  })

  it('should GET 404 on missing quotation page', function(done) {
    var opts = {
      url: process.env.WWW + '/explore/non-existent'
    }
    request(opts, function(err, res) {
      expect(err).to.eql(null);
      expect(res.statusCode).to.eql(404);
      done(); 
    })
  })

  it('should GET contribute page', function(done) {
    var opts = {
      url: process.env.WWW + '/contribute'
    }
    request(opts, function(err, res) {
      expect(err).to.eql(null);
      expect(res.statusCode).to.eql(200);
      done(); 
    })
  })

  it('should GET create page', function(done) {
    var opts = {
      url: process.env.WWW + '/create'
    }
    request(opts, function(err, res) {
      expect(err).to.eql(null);
      expect(res.statusCode).to.eql(200);
      done(); 
    })
  })

  it('should GET contributing page', function(done) {
    var opts = {
      url: process.env.WWW + '/contributing'
    }
    request(opts, function(err, res) {
      expect(err).to.eql(null);
      expect(res.statusCode).to.eql(200);
      done(); 
    })
  })

})
