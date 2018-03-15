# vue-filter-euro-pt
Vue 2 Filter just for euro currency (Portugal rules...)

### Install

Available through npm as `vue-filter-euro-pt`, or include as an inline script.

```
import Vue from 'vue'
import vueFilterEuroPT from 'vue-filter-euro-pt'

Vue.use(vueFilterEuroPT)
```
or

```
Vue.use(require('vue-filter-euro-pt'))
```


### Usage

```
{{ 11125.64 | toEuroPT(2) }}
```
Return: 11.125,36 €

#### everywhere like methods, etc...

```
this.$options.filters.toEuroPT(15364878)

```


### Options

Decimals - Integer

```
{{ 15364878 | toEuroPT(1) }}
```
Return: 15,4 €
