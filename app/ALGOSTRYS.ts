const array = [-2, -4, -6, -1, 0, 1, 2, 3, 4, 5];

function FindNumberPosition (target, index) {
    while (index < array.length && array[index] !== target) {
        index++
    }

    if (index === array.length) {
        console.log("Элемент не найден");
    } else {
        console.log(`Элемент ${target} найден на позиции ${index}`)
    }
};

// FindNumberPosition(10, 0)


const names = ['Максим', 'Андрей', 'Ваня', 'Артем', 'Вова', 'Рома', 'Кирилл', 'Павел', 'Даша'];

const sorted = names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1
    } else {
        return 1
    }
    return 0
})

// console.log(sorted)

const sorted2 = names.sort((a, b) => a.localeCompare(b));

// console.log(sorted2)

function BinnarySearch (element, array) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.round((left + right) / 2);

        if (array[mid] === element) {
            return mid
        }

        if (array[mid] < element) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return;
}


function BinnarySearch1(element, array) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.round((left + right) / 2)
        
        if (array[mid] === element) {
            return mid
        }

        if (array[mid] < element) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return
}

// console.log(BinnarySearch('Максим', sorted2))

function* range(start, end) {
    while (start <= end) {
        yield start++
    }
}

// const nums = Array.from(range(1, 11)); // вернуть заданный таргет в массиве и все, если его нет, то просто -1 возвращаем

// const nums = [false, false, false, false, false, false, true, true, true, true , true,]

// const nums = [1, 3, 5, 6, 7, 9] // вернуть индекс числа, например таргет 2, значит его индекс должен быть 1 (ОТВЕТ: ВОЗВРАЩАЕМ ПРОСТО LEFT)

// function findTargetInRange (target, array) {
//     let left = 0;
//     let right = array.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
        
//         if (array[mid] === target) {
//             return mid
//         }
    
//         if (array[mid] < target) {
//             left = mid + 1;
//             console.log(`Левая:${left}`)
//         } else {
//             right = mid - 1;
//             console.log(`Правая:${left}`)
//         }
//     }
//     return -1
// }

// console.log(findTargetInRange(-5, nums))


// function reversArray(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]]

//         left++
//         right--
//     }

//     return console.log(arr)
// }

// reversArray([1, 2, 3, 4, 5])

// function getCount(str) {
//     const letters = ["a", "e", "i", "o", "u"];
//     let counter = 0;
//     for (let i in str) {
//         for (let y in letters) {
//             if (str[i].toLowerCase().trim() === letters[y].toLowerCase().trim()) {
//                 counter++
//             }
//         }
//     }
//     return counter
// }

// console.log(getCount('abcdefg'))



// function rangeNumbers(string: string) { 
//     function* range(start, end) {
//         while (start <= end) {
//             yield start++
//         }
//     } 
    
//     let ranges = string.split(',')
//     let nums: number[] = []

//     for (let element in ranges) {
//         let [left, right] = element.split('-').map(Number);

//         if (left && right) {
//             nums = Array.from(range(left, right))
//         }
//     }

//     return console.log(nums)
// }

// console.log(rangeNumbers('1-6,8-9,11'))

// function rangeNumbers(string: string): number[] {
//     function* range(start: number, end: number) {
//         while (start <= end) {
//             yield start++;
//         }
//     }

//     const nums: number[] = [];
//     const ranges = string.split(',');

//     for (const rangeStr of ranges) {
//         const [start, end] = rangeStr.split('-').map(Number);
        
//         if (!isNaN(start) && !isNaN(end)) {
//             nums.push(...Array.from(range(start, end)));
//         }
//     }

//     return nums;
// }

// console.log(rangeNumbers('1-6,8-9,11'));
















// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function rangeNums (string) {
//     function* range(start, end) {
//         while (start <= end) {
//             yield start++;
//         }
//     }

//     let nums = [];
//     let pieces = string.split(',');
//     let result = '';

//     for (let element of pieces) {
//         if (element.includes('-')) {
//             let [left, right] = element.split('-').map(Number);
//             nums.push(...Array.from(range(left, right)));
//         } else {
//             let number = parseInt(element);
//             if (!isNaN(number)) {
//                 nums.push(number)
//             }
//         }
//     }

//     return result = nums.join(' ');
// }

// rl.question('', (input) => {
//     console.log(rangeNums(input))
//     rl.close();
// });







// function rangeNums (string) {
//     function* range(start, end) {
//         while (start <= end) {
//             yield start++;
//         }
//     }

//     let nums = [];
//     let pieces = string.split(',');
//     let result = '';

//     for (let element of pieces) {
//         if (element.includes('-')) {
//             let [left, right] = element.split('-').map(Number);
//             nums.push(...Array.from(range(left, right)));
//         } else {
//             let number = parseInt(element);
//             if (!isNaN(number)) {
//                 nums.push(number)
//             }
//         }
//     }

//     return result = nums.join(' ');
// }

// console.log(rangeNums('1-6,8-9,11')) // Первая задача




// function findTruth (array) {

//     if (array[0] === -1) {
//         array[0] = 1
//     }

//     for (let i in array) {

//         // console.log(array[1 - 1] + 1) // 2

//         if (array[i] === -1) {
//             array[i] = array[i - 1] + 1
//         } 

//         console.log(array[i])

//         if (array[i] <= (array[i - 1])) {
//            return console.log('NO')
//         }
        
//     }

//     return console.log(array)
  
// };

// findTruth([1, 3, -1, 10, -1]);

// const solve = (n, arr) => {
//     if (arr[0] === -1) {
//         arr[0] = 1;
//     }

//     const results = [];
//     results.push(arr[0]);
//     for (let i = 1; i < n; i++) {
//         if (arr[i] === -1) {
//             arr[i] = arr[i - 1] + 1;
//         } else if (arr[i] <= arr[i - 1]) {
//             console.log("NO");
//             return;
//         }
//         results.push(arr[i] - arr[i - 1]);
//     }

//     console.log("YES");
//     console.log(results.join(' '));
// }

// console.log(solve(5, [1, 3, -1, 10, -1]))


// 1 2 3 4 5

// 1 3 6 10 15

// 1 3 4 10 11

// 1 2 1 6 1


// function rangeNums(string: string): number[] {
//     function* range(start: number, end: number) {
//         while (start <= end) {
//             yield start++;
//         }
//     }
//     let nums: number[] = [];

//     // Разбиваем строку на части по запятым
//     const parts = string.split(',');
//     for (const part of parts) {
//         // Проверяем, является ли часть целым числом или диапазоном
//         if (!part.includes('-')) {
//             // Это целое число
//             const num = parseInt(part);
//             if (!isNaN(num)) {
//                 nums.push(num);
//             }
//         } else {
//             // Это диапазон
//             const [start, end] = part.split('-').map(Number);
//             nums.push(...Array.from(range(start, end)));
//         }
//     }

//     return nums.sort((a, b) => a - b); // Сортируем результат
// }

// console.log(rangeNums('1-6,8-9,11'));

// const increment = () => {
//     let counter = 0;
//     return () => (counter += 1);

// }

// console.log(increment()())
// console.log(increment()())
// console.log(increment()())

// const p = new Promise((res) => res(1));

// p.then((a) => console.log(a)).then((b) => console.log(b))


// const [sec, setSec] = useState<string[]>([]);

// console.log(sec)

// const handle = (event, idx: number) => {
//     setSec((prev) => {
//         const newA = [...prev];
//         newA[idx] = event.target.value;
//         return newA
//     })
// }

// handle()


