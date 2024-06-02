import {Food} from "./app/shared/models/Food";
import {Tag} from "./app/shared/models/Tag";

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Пицца',
    price: 200,
    tags: ['Итальянская', 'Завтрак', 'Ужин', 'Поздний завтрак', 'Обед'],
    favorite: true,
    stars: 4.9,
    imageUrl: '/assets/images/pizza.jpg',
    origins: ['Италия'],
    cookTime: '60-70',
    type: '(Вулканическая)',
    description: 'Готовы ли вы к взрыву вкуса? Представляем вам нашу знаменитую Огненную Вулканическую Пиццу — настоящий вулкан в мире гастрономических удовольствий! Эта пицца — истинное творение искусства, которое пробуждает в вас чувство приключения и страсти к настоящему вкусу.'
  },
  {
    id: '2',
    name: 'Японский панкейк',
    price: 220,
    tags: ['Сладкий', 'Милый', 'Вкусный', 'Десерт', 'Японский'],
    favorite: true,
    stars: 4.8,
    imageUrl: '/assets/images/dessert.jpg',
    origins: ['Япония'],
    cookTime: '30',
    type: '(Нежный Восток)',
    description: 'Добро пожаловать в мир утонченных вкусов и изысканных текстур с нашим японским сендвичем "Нежный Восток". Этот сендвич — это искусство в каждом кусочке, сочетающее в себе нежные сливочные ноты с сочной сладостью клубники, чтобы принести вам удовольствие в каждом укусе.'
  },
  {
    id: '3',
    name: 'Бургер',
    price: 250,
    tags: ['Фаст Фуд', 'Мясо', 'Обед'],
    favorite: true,
    stars: 4.9,
    imageUrl: '/assets/images/gamburger.jpg',
    origins: ['США'],
    cookTime: '50-60',
    type: '(Магнат)',
    description: 'Представляем вам наш гамбургер "Магнат" — король среди гамбургеров, который завоевывает сердца и желудки гурманов по всему миру! Этот гамбургер — это настоящая сенсация, которая принесет вам удовольствие и насыщение в каждом укусе.'
  },
  {
    id: '4',
    name: 'Картошка',
    price: 120,
    tags: ['Фаст Фуд', 'Соленый', 'Вкусный', 'Обед'],
    favorite: false,
    stars: 4.5,
    imageUrl: '/assets/images/potato-free.jpg',
    origins: ['США'],
    cookTime: '25-45',
    type: '(По деревенски)',
    description: 'Представляем вам нашу знаменитую картошку "По деревенски" — натуральное блюдо, которое перенесет вас в атмосферу сельской жизни и принесет непередаваемое удовольствие от простых, но вкусных вкусов.'
  },
  {
    id: '5',
    name: 'Паста',
    price: 220,
    tags: ['Итальянская', 'Сырная', 'Вкусная'],
    favorite: true,
    stars: 4.85,
    imageUrl: '/assets/images/pasta.jpg',
    origins: ['Италия'],
    cookTime: '60-80',
    type: '(Вкус Солнечной Италии)',
    description: 'Давайте отправимся в захватывающее вкусовое путешествие в самое сердце Италии с нашей непревзойденной итальянской пастой "Вкус Солнечной Италии". Это блюдо пробуждает чувства и переносит вас на уютные улицы итальянских деревень, наполняя ваш вечер теплыми воспоминаниями и ароматами.'
  },
  {
    id: '6',
    name: 'Соба',
    price: 300,
    tags: ['Японская', 'Обед', 'Ужин', 'Здоровая еда', 'Суп'],
    favorite: true,
    stars: 4.95,
    imageUrl: '/assets/images/soba.jpg',
    origins: ['Япония', 'Корея'],
    cookTime: '80-90',
    type: '(Вдохновение Сакуры)',
    description: 'Погрузитесь в атмосферу Японии с нашей непревзойденной японской собой "Вдохновение Сакуры". Это блюдо — настоящая гастрономическая симфония, которая пленит вас своим нежным вкусом и ароматом, олицетворяя великолепие весенней сакуры.'
  },
  {
    id: '7',
    name: 'Цезарь',
    price: 180,
    tags: ['Итальянская', 'Салад', 'Бестселлер'],
    favorite: true,
    stars: 5,
    imageUrl: '/assets/images/cesar.jpg',
    origins: ['Италия'],
    cookTime: '40-50',
    type: '(Императорский вкус)',
    description: 'Представляем вам королеву среди салатов — Цезарь "Императорский Вкус". Этот салат является вершиной гастрономического искусства, сочетая в себе нежность листьев салата, ароматные специи и богатый вкус, который оставляет вас в восхищении с первой пробы.'
  }
]

export const sample_tags: Tag[] = [
  {name: 'Все', count: 7},
  {name: 'Итальянская', count: 3},
  {name: 'Завтрак', count: 1},
  {name: 'Обед', count: 4},
  {name: 'Ужин', count: 2},
  {name: 'Поздний завтрак', count: 1},
  {name: 'Фаст Фуд', count: 2},
]
