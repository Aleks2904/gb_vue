export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const CommonBreadCrumbs = () => import('../..\\components\\common\\BreadCrumbs.vue' /* webpackChunkName: "components/common-bread-crumbs" */).then(c => wrapFunctional(c.default || c))
export const CommonInfoSection = () => import('../..\\components\\common\\InfoSection.vue' /* webpackChunkName: "components/common-info-section" */).then(c => wrapFunctional(c.default || c))
export const CommonItemProduct = () => import('../..\\components\\common\\ItemProduct.vue' /* webpackChunkName: "components/common-item-product" */).then(c => wrapFunctional(c.default || c))
export const CommonMailing = () => import('../..\\components\\common\\Mailing.vue' /* webpackChunkName: "components/common-mailing" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
