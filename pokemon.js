{
//Elekid

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '239',
}

const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (pokemon) => generateHtml(pokemon) )

const generateHtml = (data) => {
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const pokemonDiv = document.querySelector('.elekid')
    pokemonDiv.innerHTML = html
}
}

{
//Mantyke

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '458',
}

const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (pokemon) => generateHtml(pokemon) )

const generateHtml = (data) => {
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const pokemonDiv = document.querySelector('.mantyke')
    pokemonDiv.innerHTML = html
}
}

{
//Tyrogue

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '236',
}

const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (pokemon) => generateHtml(pokemon) )

const generateHtml = (data) => {
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const pokemonDiv = document.querySelector('.tyrogue')
    pokemonDiv.innerHTML = html
}
}

{
//Wynaut

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '360',
}

const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (pokemon) => generateHtml(pokemon) )

const generateHtml = (data) => {
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const pokemonDiv = document.querySelector('.wynaut')
    pokemonDiv.innerHTML = html
}
}

{
//Munchlax

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '446',
}

const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (pokemon) => generateHtml(pokemon) )

const generateHtml = (data) => {
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const pokemonDiv = document.querySelector('.munchlax')
    pokemonDiv.innerHTML = html
}
}

{
//Mime Jr.

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '439',
}

const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (pokemon) => generateHtml(pokemon) )

const generateHtml = (data) => {
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const pokemonDiv = document.querySelector('.mimejr')
    pokemonDiv.innerHTML = html
}
}

{
//Magby

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '240',
}

const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (pokemon) => generateHtml(pokemon) )

const generateHtml = (data) => {
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const pokemonDiv = document.querySelector('.magby')
    pokemonDiv.innerHTML = html
}
}

{
//Pichu

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '172',
}

const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (pokemon) => generateHtml(pokemon) )

const generateHtml = (data) => {
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const pokemonDiv = document.querySelector('.pichu')
    pokemonDiv.innerHTML = html
}
}

{
//Togepi

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '175',
}

const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (pokemon) => generateHtml(pokemon) )

const generateHtml = (data) => {
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const pokemonDiv = document.querySelector('.togepi')
    pokemonDiv.innerHTML = html
}
}

{
//Smoochum

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '238',
}

const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (pokemon) => generateHtml(pokemon) )

const generateHtml = (data) => {
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const pokemonDiv = document.querySelector('.smoochum')
    pokemonDiv.innerHTML = html
}
}