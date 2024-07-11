# [5.3.0](https://github.com/yujinpan/vitepress/compare/v5.1.0...v5.3.0) (2024-07-11)

### Bug Fixes

- **a11y:** make code blocks accessible with keyboard ([#3902](https://github.com/yujinpan/vitepress/issues/3902)) ([cb308b9](https://github.com/yujinpan/vitepress/commit/cb308b9295e1e661c2c72fa4229b5c7d83278d49))
- **build:** don't normalize links containing target or download property ([e24899a](https://github.com/yujinpan/vitepress/commit/e24899a073d066486e5f7ae0c47ba6d901d5ae51)), closes [#3947](https://github.com/yujinpan/vitepress/issues/3947)
- **build:** respect frontmatter.lastUpdated for pageData.lastUpdated and sitemap generation ([7fcf462](https://github.com/yujinpan/vitepress/commit/7fcf462eb8c2be6e72b4426a8211fcd6961e4967)), closes [#3931](https://github.com/yujinpan/vitepress/issues/3931)
- **build:** sort pageToHashMap to ensure stable assets ([e302328](https://github.com/yujinpan/vitepress/commit/e302328a4ce3242cbfb7112e856840b7346aa16a)), closes [#4016](https://github.com/yujinpan/vitepress/issues/4016)
- **client:** do nothing on anchor elements with empty href ([6461f5d](https://github.com/yujinpan/vitepress/commit/6461f5d42b3bfed1d7959e1167fc77f61d08f314)), closes [#3950](https://github.com/yujinpan/vitepress/issues/3950)
- don't do git log on non-existent file ([387acf7](https://github.com/yujinpan/vitepress/commit/387acf71aa351e23ca3402713020a3571ad17155)), closes [#4008](https://github.com/yujinpan/vitepress/issues/4008)
- don't reopen browser on restart ([d837e82](https://github.com/yujinpan/vitepress/commit/d837e82bc8bde63df737be2a1290a2e70c8a0bf3)), closes [#4001](https://github.com/yujinpan/vitepress/issues/4001)
- dont escape ampersand twice in title ([7ea3572](https://github.com/yujinpan/vitepress/commit/7ea357256c855ae0a9a142c14bbd5e7d344ef865))
- escape title properly in build ([49b1233](https://github.com/yujinpan/vitepress/commit/49b1233378436054c07a6ef646d0029096124021))
- properly handle svg anchor elements ([b785bd6](https://github.com/yujinpan/vitepress/commit/b785bd6ab3b5dd909aa955dc9e03b08e66b76294))
- **theme,a11y:** handle overflow on long mathematical equation and make tables focusable ([#3932](https://github.com/yujinpan/vitepress/issues/3932)) (closes [#3914](https://github.com/yujinpan/vitepress/issues/3914)) ([afc611d](https://github.com/yujinpan/vitepress/commit/afc611d399d2780550ae04caa0e73e1c0c69a680))
- **theme:** add styles for h4 too ([b54d7b0](https://github.com/yujinpan/vitepress/commit/b54d7b0d7cd1257bcadd25f9b69cba21d0a3dff6))
- **theme:** deep watch sidebar groups and force render on match change ([97f9469](https://github.com/yujinpan/vitepress/commit/97f9469b6d4eb7ba9de9a1111986581d1f704ec3)), closes [#3613](https://github.com/yujinpan/vitepress/issues/3613)
- **theme:** dim color for all text like elements inside blockquotes ([5d3ed87](https://github.com/yujinpan/vitepress/commit/5d3ed87f8530134fa709681ebadb2f3cfc68680e)), closes [#3929](https://github.com/yujinpan/vitepress/issues/3929)
- **theme:** force update title attribute on hydration ([d348da7](https://github.com/yujinpan/vitepress/commit/d348da770c2a68993d1a40d1c0223e42a681057a)), closes [#4004](https://github.com/yujinpan/vitepress/issues/4004)
- **theme:** remove unnecessary navigation role on nav element ([af4717d](https://github.com/yujinpan/vitepress/commit/af4717d6820233a011200d44abba53d0f66bfad3))
- **theme:** show filled nav bar when nav screen is open ([0fc70e2](https://github.com/yujinpan/vitepress/commit/0fc70e2d0c29c92a1dceba035295a3fac84ffc00))
- **types:** wrong types generated for markdown-it > mdurl ([48ca76c](https://github.com/yujinpan/vitepress/commit/48ca76c523d9b979a678d52447f5ce324799e47f)), closes [#3935](https://github.com/yujinpan/vitepress/issues/3935)

### Features

- allow using components in navigation bar ([#4000](https://github.com/yujinpan/vitepress/issues/4000)) ([fa87d81](https://github.com/yujinpan/vitepress/commit/fa87d8150d8185fa8a22cd6b6e762632b83f8231))
- **cli/init:** allow passing target dir as command argument ([#3948](https://github.com/yujinpan/vitepress/issues/3948)) ([99053ba](https://github.com/yujinpan/vitepress/commit/99053baea7eb6aa62a11a2cfd4b1e6e60311dd63))
- **markdown:** support including specific regions from markdown files ([#3978](https://github.com/yujinpan/vitepress/issues/3978)) ([143b1e9](https://github.com/yujinpan/vitepress/commit/143b1e91f3696507d33666ec5847e7b64a771bcf))
- support `force-auto` as an option for appearance ([1e8bb48](https://github.com/yujinpan/vitepress/commit/1e8bb48bc2891ea388bf0b9edd2f5b612bb1e85d)), closes [#3946](https://github.com/yujinpan/vitepress/issues/3946)
- **theme:** export VPHomeContent ([#3960](https://github.com/yujinpan/vitepress/issues/3960)) ([8aa6ccb](https://github.com/yujinpan/vitepress/commit/8aa6ccbe32655f76c390d15568f69f83d079385d)), closes [#3954](https://github.com/yujinpan/vitepress/issues/3954)

# [5.1.0](https://github.com/yujinpan/vitepress/compare/v5.0.0...v5.1.0) (2024-05-16)

### Bug Fixes

- **build/regression:** markdown backslash escapes not working ([d02d1e9](https://github.com/yujinpan/vitepress/commit/d02d1e923aacdb1e8061a3f76af30e8a13518277)), closes [#3808](https://github.com/yujinpan/vitepress/issues/3808)
- **build:** show file info on error ([f0debd2](https://github.com/yujinpan/vitepress/commit/f0debd20f48ab7eb58cfd142147531509d6c0209))
- **client:** don't reload page on hash change ([#3777](https://github.com/yujinpan/vitepress/issues/3777)) ([74b725a](https://github.com/yujinpan/vitepress/commit/74b725a224438ef776fed25ee82274429d94ac83))
- **dev:** match dev and prod routing behavior ([#3837](https://github.com/yujinpan/vitepress/issues/3837)) ([b360ac8](https://github.com/yujinpan/vitepress/commit/b360ac88df3bfd60e3498cc19066c0c90261ee4f))
- **dev:** multiple server instances being created when editing config too quickly ([#3835](https://github.com/yujinpan/vitepress/issues/3835)) ([729a890](https://github.com/yujinpan/vitepress/commit/729a890669c363895cfac39ece046926cad36d01))
- hashchange should only be triggered for same page navigations ([#3768](https://github.com/yujinpan/vitepress/issues/3768)) ([2a9fc2a](https://github.com/yujinpan/vitepress/commit/2a9fc2a26b829bb3f28067ac6f4a41bc1e8b7a1e))
- let vue compiler handle entity decoding ([f86ac56](https://github.com/yujinpan/vitepress/commit/f86ac56b78da76f3061e6537b897bb13c1ed802d))
- **markdown:** entities and escapes not working properly ([#3882](https://github.com/yujinpan/vitepress/issues/3882)) ([d5dbd70](https://github.com/yujinpan/vitepress/commit/d5dbd704ceb215ebf3ce9b23deec6e6c90634f0a))
- render 404 page completely on client to infer locale from browser path ([#3858](https://github.com/yujinpan/vitepress/issues/3858)) ([728cb15](https://github.com/yujinpan/vitepress/commit/728cb15677f4f84b33bed6bb2f70f47600ea1057))
- **style:** prefer YaHei over DengXian ([f0a37b4](https://github.com/yujinpan/vitepress/commit/f0a37b4b8445ec914700df054c0897721382e5b1))
- sync updates of markdown-it types ([11f4c9a](https://github.com/yujinpan/vitepress/commit/11f4c9aee36127566b7f09dcd57878c3f6a7da0a))
- **theme/a11y:** add unique name to footer prev / next navigation landmark ([e60c101](https://github.com/yujinpan/vitepress/commit/e60c101e50fa56d4cd54d434c5628cc7e2231318))
- **theme/a11y:** remove duplicate assistive text from outline nav [[#3800](https://github.com/yujinpan/vitepress/issues/3800)] ([#3803](https://github.com/yujinpan/vitepress/issues/3803)) ([733d986](https://github.com/yujinpan/vitepress/commit/733d986a84f614484b04235546dc4cda0769e833))
- **theme/i18n:** 404 page not showing localized text ([#3833](https://github.com/yujinpan/vitepress/issues/3833)) ([cc11b8e](https://github.com/yujinpan/vitepress/commit/cc11b8e41ec481320b03902bdc307d479a8ba838))
- **theme/regression:** custom font not applying in Chinese docs because of specificity ([fa2f38a](https://github.com/yujinpan/vitepress/commit/fa2f38a0c3bd121dcb7e07420566087c19b10f96)), closes [#3864](https://github.com/yujinpan/vitepress/issues/3864)
- **theme:** disable keypress effect on search button ([ccc37bb](https://github.com/yujinpan/vitepress/commit/ccc37bb80e4147b9ab91b0f5d7dfae9d51533460))
- **theme:** don't use Chinese quotes on non-Chinese documents ([#3834](https://github.com/yujinpan/vitepress/issues/3834)) ([75115f4](https://github.com/yujinpan/vitepress/commit/75115f4f8223d67dab2dc82fadaf2941aabf6330))
- **theme:** external link icon not visible for target \_blank links ([d08eeed](https://github.com/yujinpan/vitepress/commit/d08eeed89726572f7ea341df59864cc72716751c)), closes [#3327](https://github.com/yujinpan/vitepress/issues/3327)
- **theme:** fix invalid vp-offset in ssr ([9794877](https://github.com/yujinpan/vitepress/commit/9794877347140c7b4955d735cd8867c260a5089d))
- **theme:** leaking event listener when going back/forward on Safari on iOS ([#3658](https://github.com/yujinpan/vitepress/issues/3658)) ([#3671](https://github.com/yujinpan/vitepress/issues/3671)) ([1a72181](https://github.com/yujinpan/vitepress/commit/1a72181c06d78e5e6f293e3f6abdb15caa4d2f53))
- **theme:** remove small layout shift on `On this page` button ([#3767](https://github.com/yujinpan/vitepress/issues/3767)) ([5f28e74](https://github.com/yujinpan/vitepress/commit/5f28e74abfc984cdc7e0d9d9f7b7e15cb2b46923))

### Features

- **build/i18n:** support customizing copy code button's tooltip text ([#3854](https://github.com/yujinpan/vitepress/issues/3854)) ([ed6ada7](https://github.com/yujinpan/vitepress/commit/ed6ada7a688c466920f3e0ef33b7176b8eb01eee))
- **build:** add localeIndex to md.env ([#3862](https://github.com/yujinpan/vitepress/issues/3862)) ([0cbb469](https://github.com/yujinpan/vitepress/commit/0cbb469842d74381ad56d44b7975f34c405b78f8))
- config file hot update error prints error message ([#3592](https://github.com/yujinpan/vitepress/issues/3592)) ([cd5adf3](https://github.com/yujinpan/vitepress/commit/cd5adf3011d677263c93ce6f8066aaa7870b1dfc))
- **theme:** update Inter to version 4 ([#3693](https://github.com/yujinpan/vitepress/issues/3693)) ([#3694](https://github.com/yujinpan/vitepress/issues/3694)) ([ffafa31](https://github.com/yujinpan/vitepress/commit/ffafa31b9204f996f4b819684214fa631c224575))
- upgrade markdown-it types to v14 ([#3772](https://github.com/yujinpan/vitepress/issues/3772)) ([d3dd4bc](https://github.com/yujinpan/vitepress/commit/d3dd4bc93806f3bc7be5f29ad279978b4fd13c81))

# [5.0.0](https://github.com/yujinpan/vitepress/compare/v5.0.0-rc.2...v5.0.0) (2024-04-02)

### Bug Fixes

- use library `vue-demi` instead of `vitepress/demi` ([66ed535](https://github.com/yujinpan/vitepress/commit/66ed535fdd5411e367d7ab794564ed6fe2a4b0b8))

# [5.0.0-rc.2](https://github.com/yujinpan/vitepress/compare/v5.0.0-rc.1...v5.0.0-rc.2) (2024-02-02)

### Bug Fixes

- `__VUE_PROD_DEVTOOLS__` is undefined when build ([dd36ee8](https://github.com/yujinpan/vitepress/commit/dd36ee8a211b364b53ba10a37100e937d7b3d222))
- link vue path is error ([5fac501](https://github.com/yujinpan/vitepress/commit/5fac501648ccbc6054ef439ab882166076fb77d3))
- ssr render parameter type error ([eb15185](https://github.com/yujinpan/vitepress/commit/eb15185b8de8445b28bdb1eae85191e507d6e97c))

# [5.0.0-rc.1](https://github.com/yujinpan/vitepress/compare/v5.0.0-rc.0...v5.0.0-rc.1) (2024-01-29)

### Bug Fixes

- native event needs modify `.native` ([badd1c5](https://github.com/yujinpan/vitepress/commit/badd1c5c9d56cc3a1f525a9adb265f4fe6aa1e3e))

# 5.0.0-rc.0 (2024-01-29)

### Features

Change the required library `vue` to 2.7.0.

Vite & Vitepress-v2 support version.

- `vite@5` => `vitepress-v2@5`
- `vite@4` => `vitepress-v2@4`
- `vite@3` => `vitepress-v2@3`
