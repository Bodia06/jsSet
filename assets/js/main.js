//--------Zadanie 1----------
const data = new Set([1, 2, 3])
console.log(data)

console.log(data.has(3))
console.log(data.has(4))

data.add(5)
data.add(5)
data.add(6)
console.log(data)

for (const value of data) {
	console.log(value)
}

const sum = data.values().reduce((accum, v) => accum + v)
console.log(suma)

data.delete(2)
console.log(data)

data.clear()
console.log(data)

//--------Zadanie 2----------
const startData1 = [1, 6, 9, 4, 9, 1, 5, 6]
const uniqueData1 = new Set(startData1)
const uniqueDataList1 = [...uniqueData1.values()]
console.log(uniqueDataList1)

const startData2 = [1, 6, 9, 4, 9, 1, 5, 6]
const startData3 = [5, 10, 11]
const resultData23 = new Set([...startData2, ...startData3])
const uniqueDataList23 = [...resultData23.values()]
console.log(uniqueDataList23)

//--------Zadanie 3----------
const messages = [
	{ id: 1, name: 'Ivo', message: 'hello', date: new Date() },
	{ id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
	{ id: 3, name: 'Wally', message: 'hi)', date: new Date() },
	{ id: 4, name: 'Wally', message: 'fine)', date: new Date() },
]

const uniqueNames = new Set(messages.map((m) => m.name))
const uniqueNamesList = [...uniqueNames.values()]
console.log(uniqueNamesList)

const mapMessages = new Map()

messages.forEach(({ name, message, date }) => {
	if (!mapMessages.has(name)) {
		mapMessages.set(name, [])
	}
	mapMessages.get(name).push({ message, date })
})

console.log(mapMessages)
