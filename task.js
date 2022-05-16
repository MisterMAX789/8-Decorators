function cachingDecoratorNew(func) {
    let cache = [];

    function cashed(...args) {
        const hash = String (args); // получаем правильный хэш
        let idx = cache.findIndex((index)=> index.hash == hash); // ищем элемент, хэш которого равен нашему хэшу
        if (idx !== -1 ) { // если элемент не найден
          let result = cache[idx].result;
            console.log("Из кэша: " + result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кэша: " + result;
        }

        let result = func(...args); // в кэше результата нет - придётся считать
        if (cache.length > 5) {
        cache.shift ()  // добавляем элемент с правильной структурой
      }
      cache.push ({
        result:result,
        hash:hash
      });
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    return cashed;
    }


