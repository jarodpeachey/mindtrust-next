/**
 *
 * @param {*} uuid      // c6c06d5c-1ac1-47af-9ecf-b47de5cd5208
 * @param {*} email     // alex@clearbitexample.com
 * @param {*} cdomain   // clearbitexample.com
 */

function identifyClearbit(uuid, email, cdomain) {
  clearbit.identify(uuid, {
    email: email,
    company_domain: cdomain, // example optional custom trait.
  })
}
