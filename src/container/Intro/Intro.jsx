import React from 'react';
import ShowMore from '../../components/ShowMore/ShowMore'
import './Intro.css';

const Intro = () => (
  <div className="bagdarlama_container">
    <div className='bagdarlama'>
      <h2>КУРС БАҒДАРЛАМАСЫ</h2>
      <ShowMore
        taqyryp='АЛҒАШҚЫ ҚАДАМҒА “АЛҒЫ СӨЗ”'
        text1='Кіріспе'
        text2='Таргет және тың идея'
        text3='Таргетолог қызметінің этаптары'
        text4='Таргеттегі табысқа жол'
        text5='Таргетолог сөздігі'
        text6='Браузердің маңыздылығы'
      />
      <ShowMore
        taqyryp='2-ші модуль: ТАРГЕТТІҢ ФУНДАМЕНТІН ҚАЛАУ'
        text1='Алғашқы фундамент - БРИФИНГ'
        text2='Өнімнің сатылымын жоспарлау'
        text3='Воронка арқылы сату схемасы'
        text4='Рекламаға құрылған стратегия'
        text5='Конкуренттерді зерттеуге арналған сервистер'
      />
      <ShowMore
        taqyryp='3-ші модуль:ТҮБІНЕН ТҮСІНЕЙІК'
        text1='Жеке парақша+ Настройка'
        text2='Жаңа версиядағы Бизнес парақша+ Настройка'
        text3='Ads manager + Настройка'
        text4='Бизнес менеджер құрудың 3 жолы'
        text5='Бизнес менеджердің настройкасы'
        text6='Админ / партнёр ролі'
        text7='Facebook бухгалтериясы - БИЛЛИНГ'
      />
      <ShowMore
        taqyryp='4-ші модуль: АУДИТОРИЯЛАР ӘЛЕМІ'
        text1='Аудитория туралы түсінік'
        text2='«Пользовательская аудитория»'
        text3='«Похожая аудитория»'
        text4='«Сохранённая аудитория»'
        text5='«Платёжеспособная аудитория»'
        text6='Аукцион жұмысы'
        text7='Аудиториялардың жанасу деңгейі'
        text8='Конкуренттердің аудиториясын жинау. Парсинг.'
        text9='Аудиторияны сегментке бөлу;'
      />
      <ShowMore
        taqyryp='5-ші модуль: ИДЕЯСЫ МИДЫ ҚОЗҒАҒАН'
        text1='Реклама негіздері'
        text2='Оффер туралы түсінік. Оны құру жолдары.'
        text3='Креативке идея әкелетін фотостоктар'
        text4='Креативке қолданылатын иллюстрациялар'
        text5='Креативке арналған PNG картинкалар сайты'
        text6='Креатив жасайтын сайттар тізімі және қолданылуы'
        text7='Мокаптар'
        text8='Реклама үшін триггерлер'
      />
      <ShowMore
        taqyryp='6-шы модуль: ТАРГЕТ ЖАРНАМАСЫНЫҢ МАҚСАТТАРЫ'
        text1='“Охват” мақсатында реклама жіберу'
        text2='“Вовлечённость ” мақсатында реклама жіберу'
        text3='“Трафик ” мақсатында реклама жіберу'
        text4='“Просмотры видео ” мақсатында реклама жіберу'
        text5='“Генерация лидов” мақсатында реклама жіберу'
        text6='“Сообщение ” мақсатында реклама жіберу'
        text7='1 бюджет бөліп 12 жолмен клиент алып келу'
        text8='Холст арқылы реклама жіберу'
      />
      <ShowMore
        taqyryp='7-шы модуль:'
        text1='Пиксель туралы түсінік'
        text2='Пиксельді практикада қолдану'
        text3='Сайт құру және жұмыс жасау структурасы'
        text4='Домен сатып алу, орнату'
        text5='События орнату'
        text6='“Конверсия” мақсатында реклама жіберу'
        text7='UTM - метка'
        text8='Оптимизация бюджета'
        text9='А/В тестілеу'
        text10='Динамикалық креативтер'
      />
      <ShowMore
        taqyryp='8-шы блок: <БЛОКИРОВКА - ФОБИЯ ЕМЕС>'
        text1='Блокировкаға түспеу үшін алғашқы қадамдар'
        text2='Блокировканың офисі- качество аккаунтамен жұмыс'
        text3='Бизнес парақшаның блокировкасы'
        text4='Ads manager блокировкасы'
        text5='Бизнес менеджер блокировкасы'
        text6='ЗРД- дан өту, отклонен болған рекламалармен жұмыс жасау'
        text7='Блокировкадан кейінгі қолданылатын іс- әрекеттер'
      />
      <ShowMore
        taqyryp='9-шы блок: ЧАТ-БОТ'
        text1='Чат- бот системасы және оған анализ'
        text2='ManyChat платформаға шолу және маркетингке арналған бот құру мүмкіндіктері'
        text3='Автоматты  түрде әлеуметтік желіге жауап беру функциялары'
        text4='Чат- бот воронкалары'
      />
      <ShowMore
        taqyryp='10-шы блок: МАСШТАБТАУ'
        text1='Масштабтау этаптары'
        text2='Горизонталды масштабтау'
        text3='Вертикалды масштабтау'
        text4='Лид жүктеу'
        text5='Лид бағасын түсіру'
        text6='Диаграмма, инспектор'
        text7='Экспорт/ Импорт / автоправила'
        text8='Рнп отчёт'
      />
      <ShowMore
        taqyryp='11-шы блок: КЛИЕНТ ТАБУ КАНАЛДАРЫ'
        text1='Подписчик жинау жолы'
        text2='Жылы және суық аудиториямен жұмыс'
        text3='5 минутта 9000 клиент жинау'
        text4='Проект табудың нақты 2 жолы'
        text5='Сату системасы'
        text6='Эксперт Динара Асқармен зуум разбор'
      />
      <ShowMore
        taqyryp='12-шы блок: БОНУС'
        text1='Жеке бренд'
        text2='Reels түсіру + монтаж'
        text3='Сториз +монтаж/ оформление'
        text4='30 күндік контент+ план'
        text5='150 креативті макет'
        text6='50 оффер және жазылу жолдары'
        text7='«STA» модель'
      />

    </div>
  </div>
);

export default Intro;
