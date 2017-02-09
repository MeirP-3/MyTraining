// spec.js
describe('MyTrainingCheck', function() {
  var defualtUser = element(by.model('username'));
  var getTweets = element(by.buttonText('Get Tweets'));
  
  beforeEach(function() {
    browser.get('http://localhost:5000/');
  });

  //it('should default to golum_from', function() {
  //  expect(defualtUser.getAttribute('placeholder')).toEqual('golum_from');
  //});

  it('should change to eslpod user', function() {
    for(i=0;i<10;i++)
      defualtUser.sendKeys(protractor.Key.BACK_SPACE);
    defualtUser.sendKeys('eslpod');
    getTweets.click();

    expect(currentUser.getText()).toContain('eslpod');
  });
});