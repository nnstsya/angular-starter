import { browser, logging } from 'protractor'

import { AppPage } from './app.po'

describe('workspace-project App', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
  })

  it('should display welcome message', () => {
    page.navigateTo()
    expect(page.getTitleText()).toEqual('Welcome to mdb-angular-free!')
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER)

    expect(logs).not.toContain(
      jasmine.objectContaining(<logging.Entry>{
        level: logging.Level.SEVERE,
      }),
    )
  })
})
