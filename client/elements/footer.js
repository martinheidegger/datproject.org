const html = require('choo/html')

module.exports = function () {
  return html`
  <footer class="bg-neutral white">
    <section class="pv2 ph3 pa4-m mw8-ns center-ns">
      <div class="pt2 cf">
        <div class="fl w-third">
          <h4 class="f4 horizontal-rule-footer">Explore</h4>
          <ul class="dat-list p0 list lh-copy">
            ${liLink('https://datbase.org', 'DatBase')}
            ${liLink('https://dat.land', 'Community')}
          </ul>
        </div>
        <div class="fl w-third">
          <h4 class="f4 horizontal-rule-footer">Learn</h4>
          <ul class="dat-list p0 list lh-copy">
            ${liLink('/about', 'About')}
            ${liLink('https://blog.datproject.org', 'Blog')}
            ${liLink('https://docs.datproject.org', 'Docs')}
          </ul>
        </div>
        <div class="fl w-third">
          <h4 class="f4 horizontal-rule-footer">Connect</h4>
          <ul class="dat-list list p0 lh-copy">
            ${liLink('https://twitter.com/dat_project', 'Twitter')}
            ${liLink('https://github.com/datproject', 'Github')}
            ${liLink('https://www.stickermule.com/en/marketplace/9709-dat-data-v3', 'Get Stickers')}
          </ul>
        </div>
      </div>
      <p class="bt b--dat-neutral-80 color-neutral-50 tc f7 pv3">
        <strong>Dat</strong> 2017 • Page source on <a class="color-neutral-50 hover-color-pink" href="https://github.com/datproject/datproject.org">github</a>
      </p>
    </section>
  </footer>
  `

  function liLink (url, text) {
    return html`
      <li>
        <a class="f5 fw6 link color-neutral-20 hover-color-pink" href="${url}">${text}</a>
      </li>
    `
  }
}
