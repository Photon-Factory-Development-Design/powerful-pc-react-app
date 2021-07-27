/**
 * {
 *      asin: "1123",
 * offerings = [
 *      offeringID,
 *      promo
 * }]
 * 
https://www.amazon.com/gp/item-dispatch?submit.addToCart&offeringID.1=QM03rVtz1Bfkt9Lk9wXsZg1He7MYjREYkoCGlEJHooOO1m78qiJmB%2F6zZfO6jhTonzBqgH5WRgz7D6SiQBpGmx7P%2FNY4Qaavq%2BZw4xFZoLanANOOBCrCZVwrOHgx931%2Fbapp2x6Ivj2a75CaON3GtA%3D%3D
 */
let offerings = [
    {
        url: 'https://www.amazon.com/gp/product/B08XB1DL1W?th=1&psc=1',
        asin: 'B08XB1DL1W',
        offeringID:
            '49P4iwh5szEg0ybxUqZpj%2FyWA5PgnDfaRBG0XhLaKmYmJd8xksmtoaVlUrlzZGcCaxWB6gtRr6DDnsbLl37eQfXHK7Hxc5uSuXgsGu2O9FYmCddSXDNf1F9LtmHPo3I5XjQikjufke%2B8DGE7HNgufQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08PL38TT2?th=1&psc=1',
        asin: 'B08PL38TT2',
        offeringID:
            '5fUBZVO80d3EtYJ2oNfcJURpt7gh7fd78wgnVtKEPZUaWR7GdhFRVYdkje3Z3sEwlbLrp%2B6yPt8pS5s90k3gSYm0LNKuD3hzzfIgC45qq7SDVag8kW0J3xEXFk7od6tQ6EEz51jvpKUVs9IDhTwjEw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B0849P8D69?th=1&psc=1',
        asin: 'B0849P8D69',
        offeringID:
            'E8er%2Bn9tpIwRN8J90lfcUCa9AH1mxd%2Fewx0qR5lyLjbGKh8PQuvbsHTdoUJwNiqZUP86lsWN5vwCOqC7nrTXDoMy6xtqAwE9fECEqRRa%2Byh0jgxdplwWip%2BlTIAVuNchBV%2BYfGuPMVdyY235K3O%2BBg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08KGZ79N6?th=1&psc=1',
        asin: 'B08KGZ79N6',
        error: 'Waiting for element to be located By(css selector, .nav-ewc-content div[data-asin="B08KGZ79N6"])\nWait timed out after 10024ms'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08VX1HLVF?th=1&psc=1',
        asin: 'B08VX1HLVF',
        error: 'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=92.0.4515.107)\n  (Driver info: chromedriver=92.0.4515.43 (8c61b7e2989f2990d42f859cac71319137787cce-refs/branch-heads/4515@{#306}),platform=Mac OS X 11.5.0 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08BX9CJC2?th=1&psc=1',
        asin: 'B08BX9CJC2',
        error: 'Waiting for element to be located By(css selector, .nav-ewc-content div[data-asin="B08BX9CJC2"])\nWait timed out after 10000ms'
    },
    {
        url: 'https://www.amazon.com/gp/product/B091D6F3JP?th=1&psc=1',
        asin: 'B091D6F3JP',
        offeringID:
            'ap%2BRfrgPJck74hVQQXIe8UkD72ogJjCVIRFW8DGy9YIaVpyZ3BWg4xL2SHGQJZiDpP8nDANT8%2BbWyEgz%2FhRrSk3i36Sc69hUb%2FpFc5NgwksQWGn%2FTBS%2BftiWI9hIoTi5pXHE1liTBJrFOu1afy1ymA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08B7NYZCM?th=1&psc=1',
        asin: 'B08B7NYZCM',
        offeringID:
            'dsUBgk9%2F7sSOOh%2BaobHVIWKbchCqplZbd0uQJBpDLdsnKZrv%2FCO9RqRv9t9YwR4UxvxsPj8ffVM8NYQgcypH5cAGTCxv49bAu%2F5pdd01W1o%2FEBQm0Hvi1fjhAWDu1IXk19sGdYctNv8kDlN%2F9I7XuQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08R1615DP?th=1&psc=1',
        asin: 'B08R1615DP',
        offeringID:
            'DDIBhhljmGJ%2FObC%2FgTOicf4fLnFQ9X2xscSecIg6r%2FoLaxk94yXZM8FdsbTL6O7ZWJQ5sJoIEuYMOZnF1a0I5RfLGBJF135Z%2BglMfduIAqIyaxFpS%2F4d0u3l6XxQSmeHbwrVx23gQLk3U0ihNNTFbQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08KGZ79N6?th=1&psc=1',
        asin: 'B08KGZ79N6',
        offeringID:
            'lXnsm2A6Dm5kYQuVKzZWFVWhj8CLKwzjXwjyFGWvrA2foUOUYuhUcfkYKiFabOVJ%2FXQ5fAs7G8gwYKLWyTOA6htpu9Xf8QJ2MIRjabqdxMKRP38N1WcXjAP3%2B6%2FcFhIcFZedv6tPRLSltVAcZe1Tkw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08JVMGZ8Y?th=1&psc=1',
        asin: 'B08JVMGZ8Y',
        error: 'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=92.0.4515.107)\n  (Driver info: chromedriver=92.0.4515.43 (8c61b7e2989f2990d42f859cac71319137787cce-refs/branch-heads/4515@{#306}),platform=Mac OS X 11.5.0 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08KHD3HSZ?th=1&psc=1',
        asin: 'B08KHD3HSZ',
        error: 'Waiting for element to be located By(css selector, .nav-ewc-content div[data-asin="B08KHD3HSZ"])\nWait timed out after 10020ms'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08KGYDR16?th=1&psc=1',
        asin: 'B08KGYDR16',
        error: 'Waiting for element to be located By(css selector, .nav-ewc-content div[data-asin="B08KGYDR16"])\nWait timed out after 10013ms'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08C9P9VF5?th=1&psc=1',
        asin: 'B08C9P9VF5',
        error: 'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=92.0.4515.107)\n  (Driver info: chromedriver=92.0.4515.43 (8c61b7e2989f2990d42f859cac71319137787cce-refs/branch-heads/4515@{#306}),platform=Mac OS X 11.5.0 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08JVMT8Y9?th=1&psc=1',
        asin: 'B08JVMT8Y9',
        error: 'Waiting for element to be located By(css selector, .nav-ewc-content div[data-asin="B08JVMT8Y9"])\nWait timed out after 10196ms'
    },
    {
        url: 'https://www.amazon.com/gp/product/B091DBY1JT?th=1&psc=1',
        asin: 'B091DBY1JT',
        error: 'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=92.0.4515.107)\n  (Driver info: chromedriver=92.0.4515.43 (8c61b7e2989f2990d42f859cac71319137787cce-refs/branch-heads/4515@{#306}),platform=Mac OS X 11.5.0 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B089K5J3PT?th=1&psc=1',
        asin: 'B089K5J3PT',
        offeringID:
            '796bBAe7WpbMkJbMFPKHsTCoRWvlJbcFYvKpMWS%2F%2FQuFVO73Rd3x2VXxs5Ay%2B37s4QEhvnkV2NR6olLZFD7VFyudCL5e5J0qCpykFTXnOe5Wm1%2FY19I%2BneG1NqUjn%2BWoV9P0nTmaxRNQW%2BotX831pg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08R1615DP?th=1&psc=1',
        asin: 'B08R1615DP',
        offeringID:
            'JTi0VGYH8OSB8yIKqah%2B1TPjje4RyURAr9qQJaYskSK6DkMqAAIqmptkVkEDdCdiWoqgEJWSmHqZE1oubBMBfiy9CDmwuC5E4y2QUhLfEXXfAtGN4eA21FaEPLAHMgJWc%2F9MugjYvP%2FU4a%2FRkklQdw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08NCFRFFD?th=1&psc=1',
        asin: 'B08NCFRFFD',
        offeringID:
            'FZqbi%2FXOVJ1cKPpIC58ihGUZPmvMjWyxtPaetj55kcYYa5ml8xkMhzqskNTU96dmwg1sU1793vJ1lVeNfEyEaoz43GLCkQcuQPMgK33C9fwJ%2BlYsq5oHFUINdJNpViBQMzsoRxP7t5bYf8fOoClTuPE5U0jFxanTxXFbD0XYm4krOKpG%2FGhb1UntuabfgAfL'
    },
    {
        url: 'https://www.amazon.com/gp/product/B096L4MCFK?th=1&psc=1',
        asin: 'B096L4MCFK',
        error: 'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=92.0.4515.107)\n  (Driver info: chromedriver=92.0.4515.43 (8c61b7e2989f2990d42f859cac71319137787cce-refs/branch-heads/4515@{#306}),platform=Mac OS X 11.5.0 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B097F6FZTS?th=1&psc=1',
        asin: 'B097F6FZTS',
        error: 'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=92.0.4515.107)\n  (Driver info: chromedriver=92.0.4515.43 (8c61b7e2989f2990d42f859cac71319137787cce-refs/branch-heads/4515@{#306}),platform=Mac OS X 11.5.0 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08KHD3Q5Z?th=1&psc=1',
        asin: 'B08KHD3Q5Z',
        offeringID:
            'RqsL2e9IvA1xqqtzacXF2PTNPtyrcGnmj2scPwYPHLP3O2oxf7sHfayASiO%2FHn4bFztaAlk7fyPdwzZlQjXUjADfQK3hjKIIRmTSNowQ2lkpAJKMbDa6ro0%2Bo53s4DZf6eYfmccG3Koqm26h9Vn4zk3iq0B58TMRXYScZg4mdrsimVIqwyRNmWUJ6dc%2BnXmK'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08HJTN8PH?th=1&psc=1',
        asin: 'B08HJTN8PH',
        offeringID:
            'a6GJhTliRwXUjwFJW%2FylPJV8ZmY04NhDkCFvczmQTyPtH9J6v5zdZyNIVYw26fNUgVrapYhVjnXl9NwaL6Kbpi8S%2FocibEURZIi8pai6u3ga%2BqOkcanYp470kl3ZjLDzjcbrMXUSIoDonqVm9qI1Dg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B088MGQFS7?th=1&psc=1',
        asin: 'B088MGQFS7',
        offeringID:
            'AnkJxaZcozgQcT%2B3lLNuDOc82Z3wdUnpB6RRpnetIbd8apDVNAhDcQQsvRalJr41qKzuH7z0RnK74iIEk5VF4gVyvPFBi3hVST%2BkUJIQds3IrV3N%2FZejkAne7Qvo6iRmbEmhbQD5J4Fnq6pAIKhH%2BA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08KHD3HSZ?th=1&psc=1',
        asin: 'B08KHD3HSZ',
        offeringID:
            'fRgDyX1tUNXiz6X4naLEYUtgbIswIfv1UNDg3fl%2FHk19YtKknUILc6TnMjp5OWCFYwTbxsh5wQJRqKMUso7YWMmOiUIbJ79uCfVyWtWO9eaYDPDcL%2FmYc%2FfOaje9X7tIr43bdOPj03Yc749%2BV5bYZA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B091D6F3JP?th=1&psc=1',
        asin: 'B091D6F3JP',
        offeringID:
            'PY0pQZuiVTFHEGbTsdmqpc3ZouTbPw9g%2FnaAjb0twneJs%2BPItfmECDkR%2BYd7XfbNzxFdu8DEvJWATqcYPKD8bps6uIS9UoeOStNYQemZXEBQVqZJD2wt%2FK7omMCpgXGVZDB9gfxpHJSS0sPeIJIOqg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B095PXZXHG?th=1&psc=1',
        asin: 'B095PXZXHG',
        error: 'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=92.0.4515.107)\n  (Driver info: chromedriver=92.0.4515.43 (8c61b7e2989f2990d42f859cac71319137787cce-refs/branch-heads/4515@{#306}),platform=Mac OS X 11.5.0 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08P2DDD55?th=1&psc=1',
        asin: 'B08P2DDD55',
        offeringID:
            'WmClPh%2B5PXSwVdZoDAaTnJt7nIITvoOGlY8LTeJf6s24rRdRedP%2BiKx9L6Bs%2B6gcpSgOS%2BzhGvstUNFHnTxxHJ%2F%2BrYWAJKkNYsrE%2BvqFHRw4kT8kf4SmjNIq71iFFMLJrzLdeJf8T%2BgQb1qTBZfyqg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B091D5QNTT?th=1&psc=1',
        asin: 'B091D5QNTT',
        offeringID:
            'wRtwqRffLEk2cA6rW2rZimydAWUjOyWUr7uDl6DkkJLNJfEPGWR66tIrwVuDUaGzeR7ruIHjJyH96AGYX6aVpNkIhxP6kqmNuCv0UrLUVHrXV9gV9Na7TIlVB%2B1hb99yAVB%2B7bdIsmR%2FaDi92xopiQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B0961H4GH7?th=1&psc=1',
        asin: 'B0961H4GH7',
        offeringID:
            '6J5rhVqK63FpHj7DsepzmwfxEUbEsBM%2FCuokxI9UGmp61QBy1VbSYrtGd0FWDo4czo41DNjF691faR7B7vqIatnoV8EZ0Xgg1u5bnTuXx7KhPjSROliPf73v2zn47c6o49ub46EDZJZElE6nWYx2Og%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08BX9CJC2?th=1&psc=1',
        asin: 'B08BX9CJC2',
        offeringID:
            'wi%2B138dEbBiguUM08zTdJVKxR89PDmilZSIJHSlpFlJUgpvFp1O7gLLAAfFkvF%2FdrhpWeQmRH%2BpdZZcyKHGuxYsOJePSjTpsJYQRYTtGm%2BT3h88xIPV1a2evwnGaBwcHvtM%2FU0yBJfHwj0jvO%2F3xdA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08YKBYP62?th=1&psc=1',
        asin: 'B08YKBYP62',
        offeringID:
            'K3ITUskZBDVTtbBztWX9Y0Giq4gcHWp%2FbtpOY3MvaTu%2BGGSDODrN2wph437%2FuzT%2FJ%2FxaD6RrA0b8%2FjssJUZa3B28FygvGwQTi58uBIqG3lwv2wxmdKsvTkqZw6cl6gTPV2IYSgRpqq5ZfHuWN1RsAg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08JVMGZ8Y?th=1&psc=1',
        asin: 'B08JVMGZ8Y',
        error: 'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=92.0.4515.107)\n  (Driver info: chromedriver=92.0.4515.43 (8c61b7e2989f2990d42f859cac71319137787cce-refs/branch-heads/4515@{#306}),platform=Mac OS X 11.5.0 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08JVMT8Y9?th=1&psc=1',
        asin: 'B08JVMT8Y9',
        offeringID:
            'YwMGTeSDQGI1F3BZdQImAYpLlD%2BoDS%2FgTHq0ctJhYj%2BdtRQhKgJFL9HWFzE%2FpONxG0Ul5Wg8FKrazdq7pngmsm16Wi5dqTm5%2BN3GPyWENTFToifq9iSwGVl%2F50o8vDCuxDhiXLzNdQx2Eic%2FVbztfw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08Y581ZCN?th=1&psc=1',
        asin: 'B08Y581ZCN',
        offeringID:
            'mGauB1i6v1yJueTslvcELFNhVSjHvkT9e%2BNK2eEe730pv3QR0lL5bMUdplMlCmpuP3aM89sChp8MICwxQEY%2Bc%2BFDbM1KcWYpKfi9fNNtDo3bzPV2q3jwiqp6osllKuN2qQ94LAjR9W%2FZCIbixvBExQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08NCFRFFD?th=1&psc=1',
        asin: 'B08NCFRFFD',
        offeringID:
            'A9maRHgwKUn4AKujGVq3WLtVk8xCQtDewLt%2BxlNTEIVi30bP2n2PxY0MoP8O%2Brsm%2BiGv7%2B8U5SJQY2TdeoU%2B4X%2FxElPL7zPyF%2BE8Q3%2Fu8OnuqGmJiNjeCkylbpfzb%2F3wV0WPDpVwzdFtW0ylTziNlQlLd8pHvPh1Cdj8jvEHOhDBYi9v4QgCOsDr%2BxQuRaXL'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08JVMT8Y9?th=1&psc=1',
        asin: 'B08JVMT8Y9',
        offeringID:
            'R6gE0OLlFYCA8KTA0mF0Ky2H47tiolDKoQN22pvzKM9NUBejxpileks3GzFYhSlrMKL5CCfe%2BjLvXnwVQdxCRkKLZpUckiOCY%2FQGTlEOS9NnNPZSGcmEmXiIa8xwgkIIsp75Nk5RycdQGkIZhnsQlg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B0888SQHS6?th=1&psc=1',
        asin: 'B0888SQHS6',
        offeringID:
            'IZtdI50GKooCUF9WfjGF4JuqJqt8rr6JmgcXryox2cqVZ%2BCfxUBmFuzm4NRLZuXRGxCHsKKNf%2BQdIWstANm%2BLih966yOxcO0maVLWT4%2FXaAMnA47jdPgdNFiu8JIumm%2B1QZecOjuFtirJ7bbQzDgwbjlu9zES1QYHSBGSWFlpzgyuLqFAdVHcQ8bi7XXOqnv'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08CZX93CJ?th=1&psc=1',
        asin: 'B08CZX93CJ',
        offeringID:
            'LUyK1Zj%2FJ%2BViam0AJY4h4%2F0c8l9dicmh7LMAgV4dJbiQoIeo4hscWEN6sRMDrnENXa7C2sHw8msR2cBrDhd7pQLQ8H1GMyoyN6V2MBeideO6pgkaHEkL4jtmqP05CI8%2BAJubDMWN118NPG1RU%2BFnZA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08JVLYJKY?th=1&psc=1',
        asin: 'B08JVLYJKY',
        offeringID:
            'ZD7KP6JGzGrodKkYq5J7QKJP2XS7kUL9vzDcnyqiS2n1h5MCFk51eeOeH%2FWsuan6K89eRAizP%2Bp%2Bm3dIbHm%2Fg7d10vioOaRDx0SK9PIa%2BFsKzdk%2BwdwJZgY84D2KxM%2FlSxHW98FZCdv83IPiTccueg%3D%3D'
    }
];

export const findOfferingIDFromAsin = (offerings, asin) => {
    return offerings.find((offering) => offering.asin === asin);
};

export const setOfferings = (_) => (offerings = _);

export default offerings;
