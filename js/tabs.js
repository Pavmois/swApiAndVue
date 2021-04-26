function Tab(tabData,i) {
    return `<li class="tab-link_tab" id="${i}"><span></span>${tabData.name}</li>`;
}
function TabList(tabs){
    return `<ul>
                ${tabs.map((el,i)=>Tab(el,i)).join('')}
            </ul>`

}

let tabs = [
    {
        name:'github',
        contentLink:'https://github.com/Pavmois',
        contentLinkText:'github/Pavmois',
        contentText:'Здесь вы можете посмотреть мои проекты'
    },
    {
        name:'email',
        contentLink:'mailto:pymoiseev@yandex.ru',
        contentLinkText:'Яндекс-почта',
        contentText:'Ваши предложения'
    },
    {
        name:'HeadHunter',
        contentLink:'https://hh.ru/resume/6b83a419ff08c595630039ed1f49486f54426a', 
        contentLinkText:'Резюме на hh.ru',
        contentText:'Связь со мной'
    },
];

$('.tabs_container')[0].innerHTML = TabList(tabs);

function TabContent(tab) {
    return `<div class="tabs_content_container" style="display: block">
                <a href="${tab.contentLink}" target="_blank">${tab.contentLinkText}</a>
                <p>${tab.contentText}</p>
</div>`
}

$('.tab-link_tab').on('click',function () {
   $('.tab-content_wrapper')[0].innerHTML = TabContent(tabs[+this.id]);
});