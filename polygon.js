ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [53.46, 49.17],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Создаем многоугольник, используя класс GeoObject.
    var myGeoObject = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
                // Координаты вершин внешнего контура.
             
            ],
            // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
            fillRule: "nonZero"
        },
        // Описываем свойства геообъекта.
        properties:{
            // Содержимое балуна.
            balloonContent: "Многоугольник"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF00',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 5,
        // Стиль обводки.
        strokeStyle: 'shortdash'
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myGeoObject);

    // Создаем многоугольник, используя вспомогательный класс Polygon.
    var myPolygon = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            [53.49, 49.08],
            [53.44, 49.06],
            [53.42, 49.09],
            [53.44, 49.21],
            [53.49, 49.20]
        ],
        // Координаты вершин внутреннего контура.
        [
            
        ]
    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        hintContent: "Опасная зона"
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF0088',
        // Ширина обводки.
        strokeWidth: 2
    });
   var myPolygon1 = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            [53.497426, 49.093547],
            [53.496734, 49.138171],
            [53.498148, 49.172047],
            [53.488425, 49.173830],
            [53.480998, 49.125096]
        ],
        // Координаты вершин внутреннего контура.
        [
            
        ]
    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        hintContent: "Опасная зона"
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF0088',
        // Ширина обводки.
        strokeWidth: 2
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myPolygon1);
    myMap.geoObjects.add(myPolygon);
}
