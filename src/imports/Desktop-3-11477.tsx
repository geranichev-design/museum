import svgPaths from "./svg-91rdsibfik";
import imgRectangleUpd1 from "figma:asset/b2695ccb01bc3b4f66b08f46ad0c7a2a4afc78b1.png";
import imgSecondaryImage from "figma:asset/52fb1b3a0e0ff5a122bd8618e88383672d22221e.png";
import imgMainImage from "figma:asset/8da22aa013ec4274911b7aec34c511c5e71da25f.png";
import imgDetailedImage from "figma:asset/59753c9985b1cd2677d3920fc5933b717feab561.png";
import { imgGroup, imgVector } from "./svg-m7770";

function Group() {
  return (
    <div className="absolute inset-[8.4%_73.04%_8.78%_3.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.539px_0px] mask-size-[47.345px_47.205px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.2666 47.2046">
        <g id="Group">
          <path d={svgPaths.p2fbd0070} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p14e8a900} fill="var(--fill-0, white)" id="Vector_2" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p217b6700} fill="var(--fill-0, white)" id="Vector_3" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p17119a80} fill="var(--fill-0, white)" id="Vector_4" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p14d47380} fill="var(--fill-0, white)" id="Vector_5" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[8.4%_71.66%_8.78%_2.61%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Component1() {
  return (
    <div className="h-[57px] overflow-clip relative shrink-0 w-[184px]" data-name="Лого національного музею «Чорнобиль»_текст справа_чорний 1">
      <ClipPathGroup />
      <div className="absolute inset-[26.32%_1.66%_53.89%_32.54%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.063 11.2822">
          <path d={svgPaths.p3cfaacc0} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute inset-[48.07%_0.49%_28.09%_32.38%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123.518 13.5861">
          <path d={svgPaths.p1738a200} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex font-['Oswald',sans-serif] font-medium gap-[19px] items-center leading-[22px] relative shrink-0 text-[20px] uppercase whitespace-nowrap">
      <p className="relative shrink-0 text-[#dfbe22]">укр</p>
      <p className="relative shrink-0 text-white">eng</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-end relative shrink-0 w-[561px]">
      <Frame2 />
      <div className="bg-[#dfbe22] content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="button">
        <div className="flex flex-col font-['Oswald',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black uppercase whitespace-nowrap">
          <p className="leading-[22px]">Придбати квиток</p>
        </div>
      </div>
      <button className="content-stretch cursor-pointer flex flex-col gap-[6px] items-center justify-center relative shrink-0 size-[24px]" data-name="icons">
        <div className="h-[4px] relative shrink-0 w-full" data-name="Line 60 (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 4">
            <path d="M24 0V4H0V0H24Z" fill="var(--fill-0, #F5F3EA)" id="Line 60 (Stroke)" style={{ fill: "color(display-p3 0.9608 0.9529 0.9176)", fillOpacity: "1" }} />
          </svg>
        </div>
        <div className="h-[4px] relative shrink-0 w-full" data-name="Line 61 (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 4">
            <path d="M24 0V4H0V0H24Z" fill="var(--fill-0, #F5F3EA)" id="Line 60 (Stroke)" style={{ fill: "color(display-p3 0.9608 0.9529 0.9176)", fillOpacity: "1" }} />
          </svg>
        </div>
        <div className="h-[4px] relative shrink-0 w-full" data-name="Line 62 (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 4">
            <path d="M24 0V4H0V0H24Z" fill="var(--fill-0, #F5F3EA)" id="Line 60 (Stroke)" style={{ fill: "color(display-p3 0.9608 0.9529 0.9176)", fillOpacity: "1" }} />
          </svg>
        </div>
      </button>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] h-[73px] items-center justify-between max-w-[1200px] min-w-px py-[8px] relative" data-name="content">
      <Component1 />
      <Frame3 />
    </div>
  );
}

function Head() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="head">
      <Content />
    </div>
  );
}

function BackIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Back Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Back Icon">
          <path d={svgPaths.p15887800} fill="var(--fill-0, #E6BC00)" id="icon/navigation/chevron_left_24px" style={{ fill: "color(display-p3 0.9020 0.7373 0.0000)", fillOpacity: "1" }} />
          <path d={svgPaths.p34665d80} fill="var(--fill-0, #E6BC00)" id="icon/navigation/chevron_left_24px_2" style={{ fill: "color(display-p3 0.9020 0.7373 0.0000)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="content-stretch flex gap-[4px] items-end max-w-[1200px] relative shrink-0 w-full" data-name="Navigation Bar">
      <BackIcon />
      <p className="font-['Montserrat',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#e6bc00] text-[16px] whitespace-nowrap">на головну</p>
    </div>
  );
}

function ImageFrame() {
  return (
    <div className="absolute contents left-0 top-[-8px]" data-name="Image Frame">
      <div className="absolute h-[363px] left-0 top-0 w-[567.044px]" data-name="Rectangle upd 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src="/AV.jpg" />
        </div>
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="h-[365px] overflow-hidden relative shrink-0 w-[570px]" data-name="Image Container">
      <div className="absolute flex items-center justify-center left-[330.64px] size-[194.498px] top-[105.34px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[34.22deg]">
          <div className="bg-[#dfbe22] size-[140px]" data-name="Overlay" />
        </div>
      </div>
      <ImageFrame />
    </div>
  );
}

function ArticleHeader() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Article Header">
      <div className="relative shrink-0 size-[32px]" data-name="icons">
        <div className="absolute bg-[#dfbe22] inset-0" />
      </div>
      <p className="font-['Oswald',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f5f3ea] text-[34px] uppercase whitespace-nowrap">Історія Катастрофи</p>
    </div>
  );
}

function ArticleBody() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[16px] text-white w-full" data-name="Article Body">
      <p className="font-['Montserrat',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 w-[min-content]">Історія ЧАЕС починається із Постанови Ради Міністрів СРСР від 29 вересня 1966 року про введення в дію енергетичних потужностей у розмірі 11,9 млн кВт. Частину цієї потужності – 8 млн кВт – мали генерувати атомні електростанції.</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 w-[min-content]">{`У південній частині Об'єднаної енергетичної системи СРСР планувалося будівництво атомної станції, яка повинна забезпечити електроенергією Центральний енергетичний район – 27 областей Української РСР і Ростовську область із населенням 53 мільйони осіб.`}</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[22px] relative shrink-0 w-[569px]">Наказом Міністра енергетики і електрифікації СРСР № 297 від 11 грудня 1969 року було організовано Дирекцію АЕС, що будується, з місцезнаходженням у селі Копачі Чорнобильського району Київської області з підпорядкуванням її «Головатоменерго». Проммайданчик Чорнобильської АЕС розташовувався у східній частині українсько-білоруського Полісся за 110 км на північний схід від Києва і 15 км на північний захід від міста Чорнобиля Київської області.</p>
    </div>
  );
}

function ArticleContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-start relative shrink-0 w-[570px]" data-name="Article Container">
      <ArticleHeader />
      <ArticleBody />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0" data-name="Header Section">
      <ImageContainer />
      <div className="flex flex-row items-center self-stretch">
        <ArticleContainer />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="Main Content">
      <HeaderSection />
      <div className="font-['Montserrat',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[16px] text-white w-[min-content] whitespace-pre-wrap">
        <p className="leading-[22px] mb-0">{`15 серпня 1972 року у фундамент головного корпусу було закладено перший кубометр бетону. А 26 вересня 1977 року включенням у мережу турбогенератора № 2 енергоблок №1 ЧАЕС був введений у дію. На території України з'явилася перша атомна електростанція.`}</p>
        <p className="leading-[22px] mb-0">Останній енергоблок Чорнобильської АЕС – енергоблок №4 – виведений на проектну потужність 1000 МВт 28 березня 1984 року.</p>
        <p className="leading-[22px]">{`У квітні 1986 року в експлуатації знаходилось чотири енергоблоки потужністю  1000 Мвт кожний, у структурних підрозділах ЧАЕС  на той час працювало близько 6 тис осіб.`}</p>
      </div>
    </div>
  );
}

function InfoContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[22px] min-w-px relative text-white" data-name="Info Container">
      <p className="font-['Oswald',sans-serif] font-medium relative shrink-0 text-[20px] uppercase w-full">Аварія на Чорнобильській АЕС: дата, час, причини</p>
      <p className="font-['Montserrat',sans-serif] font-normal relative shrink-0 text-[16px] w-full whitespace-pre-wrap">{`Аварія сталася в ніч 26 квітня 1986 року о 01:23:48 під час планової зупинки реактора 4-го енергоблока та проведення випробувань турбогенератора при повній втраті енергозабезпечення АЕС, а саме – використання механічної енергії обертання турбіни, що зупиняється, для виробітку  електроенергії.`}</p>
      <p className="font-['Montserrat',sans-serif] font-normal relative shrink-0 text-[16px] w-full whitespace-pre-wrap">{`До аварії призвів позитивний паровий ефект реактивності реактора  та недоліки  конструкції поглинаючих стрижнів. Вибухами було зруйновано активну зону реактора, деаераторну етажерку; будівля енергоблока,  покрівля машинної зали частково обвалилися.`}</p>
      <p className="font-['Montserrat',sans-serif] font-normal relative shrink-0 text-[16px] w-full">За міжнародною шкалою ядерних подій аварію віднесено до вищого 7 рівня.</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[-22.19%_25.64%_30.12%_31.97%]" style={{ containerType: "size" }} data-name="Group">
      <div className="absolute flex inset-[-14.18%_32.47%_38.13%_38.79%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-56.6151cqw,80.766cqh)] rotate-[29.11deg] skew-x-[-0.07deg] w-[hypot(43.3849cqw,19.234cqh)]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-49.364px_-27.489px] mask-size-[267.734px_267.196px] relative size-full" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.9143 196.292">
              <path d={svgPaths.p395cdd00} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[-10.61%_28.71%_41.7%_35.03%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-27.9602cqw,55.5341cqh)] rotate-[29.1deg] skew-x-[-0.07deg] w-[hypot(72.0398cqw,44.4659cqh)]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-27.262px_-37.45px] mask-size-[267.734px_267.196px] relative size-full" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 175.79 122.3">
              <path d={svgPaths.pb635f00} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[-10.61%_28.71%_41.7%_35.03%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-27.9602cqw,55.5341cqh)] rotate-[29.1deg] skew-x-[-0.07deg] w-[hypot(72.0398cqw,44.4659cqh)]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-27.264px_-37.442px] mask-size-[267.734px_267.196px] relative size-full" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 175.79 122.3">
              <path d={svgPaths.p27de6a00} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[-10.61%_32.02%_45.59%_35.03%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-30.7729cqw,58.8545cqh)] rotate-[29.1deg] skew-x-[-0.07deg] w-[hypot(69.2271cqw,41.1455cqh)]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-27.264px_-37.446px] mask-size-[267.734px_267.196px] relative size-full" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153.482 122.297">
              <path d={svgPaths.p3f25db00} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[6.19%_34.56%_82.29%_59.97%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-35.7412cqw,64.155cqh)] rotate-[29.1deg] skew-x-[-0.07deg] w-[hypot(64.2588cqw,35.845cqh)]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-173.889px_-84.341px] mask-size-[267.734px_267.196px] relative size-full" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6715 23.6009">
              <path d={svgPaths.p27b93c00} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[-24.04%_24.07%_28.27%_30.4%]" style={{ containerType: "size" }} data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function ImageSection() {
  return (
    <div className="aspect-[531/252] flex-[1_0_0] min-w-px relative" data-name="Image Section">
      <ClipPathGroup1 />
      <div className="absolute flex h-[229.452px] items-center justify-center left-[-39px] top-[70px] w-[495.517px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[7.06deg]">
          <div className="h-[172px] relative w-[478px]" data-name="Secondary Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[331.58%] left-[-8.37%] max-w-none top-[-187.97%] w-[119.25%]" src={imgSecondaryImage} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[219.72px] size-[395.564px] top-[-33.28px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[9.17deg]">
          <div className="relative size-[345px]">
            <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 298.779 258.75">
                <path d={svgPaths.p24c50a00} fill="var(--fill-0, #DFBE22)" id="Polygon 6" style={{ fill: "color(display-p3 0.8745 0.7451 0.1333)", fillOpacity: "1" }} />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[332px] left-[-27px] top-[-33px] w-[598px]" data-name="Main Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[79.29%] left-0 max-w-none top-[9%] w-full" src={imgMainImage} />
        </div>
      </div>
    </div>
  );
}

function InfoSection() {
  return (
    <div className="content-stretch flex gap-[24px] items-center max-w-[1200px] relative shrink-0 w-full" data-name="Info Section">
      <InfoContainer />
      <ImageSection />
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[22px] min-w-px relative text-white" data-name="Footer Container">
      <p className="font-['Oswald',sans-serif] font-medium relative shrink-0 text-[20px] uppercase w-full">{` Хто був на чергуванні?`}</p>
      <p className="font-['Montserrat',sans-serif] font-normal relative shrink-0 text-[16px] w-full">В ніч, коли сталася аварія, в епіцентрі ядерної катастрофи опинилося близько 200 осіб персоналу працюючих енергоблоків станції та майже 300 будівельників та монтажників, що працювали на будівельному майданчику III черги ЧАЕС.</p>
    </div>
  );
}

function FooterSection() {
  return (
    <div className="content-stretch flex items-start justify-end max-w-[1200px] relative shrink-0 w-full" data-name="Footer Section">
      <FooterContainer />
    </div>
  );
}

function DetailContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[22px] min-w-px relative text-white" data-name="Detail Content">
      <p className="font-['Oswald',sans-serif] font-medium relative shrink-0 text-[20px] uppercase w-full">Перші дії МВС, пожежних, військових, медиків…</p>
      <p className="font-['Montserrat',sans-serif] font-normal relative shrink-0 text-[16px] w-full whitespace-pre-wrap">{`Через декілька хвилин після вибухів до місця катастрофи прибувають чергові караули  пожежних частин з охорони ЧАЕС та міста енергетиків Прип’яті. Очолювали караули  23-річні лейтенанти Володимир Правик та Віктор Кибенок. За зовнішніми ознаками ситуація виглядала так: 4-й�енергоблок  охоплений їдким отруйним чорним димом, навколо будівлі завали завширшки до 40�метрів, уламки графіта та фрагментів ядерного палива на покрівлі машинної зали і 3-го�енергоблока. На покрівлях  виникло близько 30�осередків пожежі. Пожежні бачили потужне малинове сяйво, яке виходило з активної зони реактора.`}</p>
      <p className="font-['Montserrat',sans-serif] font-normal relative shrink-0 text-[16px] w-full whitespace-pre-wrap">{`О 01:46 на місце катастрофи прибув начальник пожежної частини з охорони ЧАЕС майор Леонід Телятников, який взяв керівництво гасінням пожежі на себе. Пожежні боролися з вогнем  на даху машинної зали, яка мала бітумне покриття та 3-го�енергоблока, в умовах потужного випромінювання, сильного задимлення на висоті від 12 до 70 метрів при постійній загрозі руйнування конструкцій. Із засобів захисту пожежні мали тільки брезентові роби – бойовки, рукавиці, каски, протигази.  О 02:25 було локалізовано останні осередки горіння на покрівлі машинної зали. 06:35 оголошено про повну ліквідацію пожежі на ЧАЕС.`}</p>
    </div>
  );
}

function DetailSection() {
  return (
    <div className="content-stretch flex gap-[30px] items-start justify-end relative shrink-0 w-full" data-name="Detail Section">
      <div className="h-[483px] relative shrink-0 w-[486px]" data-name="Detailed Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.83%] left-0 max-w-none top-[-2.69%] w-full" src={imgDetailedImage} />
        </div>
      </div>
      <DetailContent />
    </div>
  );
}

function DetailContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="Detail Container">
      <DetailSection />
      <p className="font-['Montserrat',sans-serif] font-normal relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">{`Шестеро пожежних, серед яких були обидва начальника караулів Володимир Правик та Віктор Кибенок, були відправлені до міської Прип’ятської лікарні. 27 квітня першу групу важко опромінених пожежних та енергетиків відправили літаком до 6-ї клінічної лікарні (м. Москва).`}</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">{`Героїчні дії пожежних хоча і не могли зупинити розвиток аварії, але дозволили запобігти розповсюдженню пожежі на 3-й енергоблок та суттєво зменшити наслідки аварії. З 73 пожежних, які брали участь у гасінні пожежі в ніч аварії, 54 отримали небезпечні дози опромінення, шестеро пішли з життя: лейтенанти Володимир Правик і Віктор Кибенок, старші сержанти Василь Ігнатенко і Микола Титенок, сержанти Микола Ващук і Володимир Тішура. Наймолодшому з них було лише 22 роки, найстаршому – 28… Усі вони посмертно відзначені високими державними нагородами – лейтенантам Кібенку і Правику присвоєно звання Героя Радянського Союзу, Василь Ігнатенко, Микола Титенок, Микола Ващук і Володимир Тішура – нагороджені орденами Червоного Прапора. Звання Героя Радянського Союзу було присвоєно і майору Леоніду Телятникову, який через 19 років пішов із життя через онкологічне захворювання внаслідок променевої хвороби 2 ступеню.`}</p>
      <p className="font-['Montserrat',sans-serif] font-normal relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">{`26 квітня о 02:00 були підняті по тривозі 190 чоловік особового складу Прип’ятського та Чорнобильського відділів міліції. Вони забезпечили надійну охорону громадського порядку в зоні аварії, м. Прип’ять та прилеглій до ЧАЕС території, здійснювали евакуацію населення. Загалом майже 30 тисяч співробітників Міністерства внутрішніх справ взяли участь в організації та діяльності з охорони громадського порядку, охороні, залишеного мешканцями майна, будинків, господарчих об’єктів, в організації руху транспорту на прилеглій до станції території, по забезпеченню безпеки в режимній зоні тощо.`}</p>
      <p className="font-['Montserrat',sans-serif] font-normal relative shrink-0 text-[16px] text-white w-full">{`Кваліфіковану медичну допомогу населенню, яке опинилося в районах з підвищеним рівнем радіоактивного забруднення, надавали 450 медичних мобільних бригад з амбулаторіями загальною чисельністю близько 6000 чоловік. Вони здійснили радіологічне обстеження 135 тисяч дорослих та 100 тисяч дітей.`}</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-white w-full">У гострий період катастрофи опромінених негайно госпіталізували до спеціалізованих медичних закладів. Основний потік потерпілих прийняв Київський інститут онкології та радіології, Київський інститут гематології та переливання крові, 6-та клінічна лікарня (м. Москва).</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full z-[3]" data-name="Container">
      <NavigationBar />
      <MainContent />
      <div className="bg-white h-[8px] max-w-[1200px] shrink-0 w-full" data-name="Divider" />
      <InfoSection />
      <div className="bg-white h-[8px] max-w-[1200px] shrink-0 w-full" data-name="Divider" />
      <FooterSection />
      <div className="bg-white h-[8px] max-w-[1200px] shrink-0 w-full" data-name="Divider" />
      <DetailContainer />
    </div>
  );
}

function Logo() {
  return (
    <div className="col-1 h-[73.35px] relative row-1 shrink-0 w-[267px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 267 73.3496">
        <g id="logo">
          <g id="Vector">
            <path d={svgPaths.p7149800} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p1c524180} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pabd6080} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p248c5c80} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3bc2d200} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p161d5080} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p7758b80} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3e49d480} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2d254600} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p9d77100} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pf5d4d80} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p1acecf00} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p10520f80} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p21f8b000} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p36878380} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p31a69c00} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p9d50a00} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p2436a580} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p115ce480} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2df0980} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p2088f700} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p36f4af80} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3543a1c0} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3a734d80} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p3b2e6a72} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2bc01500} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
          </g>
          <path d={svgPaths.p6a44080} fill="var(--fill-0, black)" id="Union" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Contacts() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-[2/span_2] self-start shrink-0 text-black" data-name="contacts">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full">Контактна інформація</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">м. Київ, провулок Хорива, 1,</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">тел. +38 044 482-56-27</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Пн – Сб (Нд - вихідний день)</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">10:00 – 18:0 (каса працює до 17:00)</p>
    </div>
  );
}

function Main() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-between justify-self-stretch relative row-[1/span_3] self-stretch shrink-0" data-name="main">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]">Головна</p>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Придбати квитки</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Екскурсії</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Анонс подій</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Історія катастрофи</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Простори музею</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Вікторина</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-between justify-self-stretch relative row-[1/span_3] self-stretch shrink-0" data-name="about">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]">Про музей</p>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Історія</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Місія</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Команда</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Партнери</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Доступність</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Документи</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Допомога музею</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Контакти</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23.9998">
        <g id="Group">
          <path d={svgPaths.p30a69580} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p1efe400} fill="var(--fill-0, black)" id="Vector_2" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p2d1943f0} fill="var(--fill-0, black)" id="Vector_3" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group4 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group3 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[9.29%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 19.5413">
        <g id="Group">
          <path d={svgPaths.p128b0d80} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[9.29%_0]" data-name="Group">
      <Group6 />
    </div>
  );
}

function TwitterSocialMediaSvgrepoCom() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="twitter-social-media-svgrepo-com">
      <Group5 />
    </div>
  );
}

function YoutubeSvgrepoCom() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="youtube-svgrepo-com">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path d={svgPaths.p396bb380} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p1948ba00} fill="var(--fill-0, black)" id="Vector_2" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p728d600} fill="var(--fill-0, black)" id="Vector_3" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p53fb900} fill="var(--fill-0, black)" id="Vector_4" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p399cc700} fill="var(--fill-0, black)" id="Vector_5" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.pce9980} fill="var(--fill-0, black)" id="Vector_6" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[20px] items-end relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p3ae40300} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
        </svg>
      </div>
      <Group2 />
      <TwitterSocialMediaSvgrepoCom />
      <YoutubeSvgrepoCom />
    </div>
  );
}

function SocialMedias() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[6px] items-start relative row-1 self-start shrink-0 w-[274.5px]" data-name="social medias">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]">Наші соцмережі</p>
      <Frame1 />
    </div>
  );
}

function Payment() {
  return (
    <div className="col-4 content-stretch flex gap-[16px] items-center justify-self-start relative row-3 self-start shrink-0" data-name="payment">
      <div className="overflow-clip relative shrink-0 size-[50px]" data-name="mastercard-svgrepo-com">
        <div className="absolute inset-[16.67%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 33.3333">
            <path d={svgPaths.p342dad00} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[50px]" data-name="visa-svgrepo-com">
        <div className="absolute inset-[16.67%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 33.3333">
            <path d={svgPaths.p33e73f00} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute inset-[8.33%_8.01%]" data-name="МВС_Лого">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.6617 36.3822">
        <g id="ÐÐÐ¡_ÐÐ¾Ð³Ð¾">
          <g id="Group">
            <path d={svgPaths.p2ea19db0} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p12b7ba80} fill="var(--fill-0, black)" id="Vector_2" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pc6c0200} fill="var(--fill-0, black)" id="Vector_3" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3acc3200} fill="var(--fill-0, black)" id="Vector_4" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3f0b0f00} fill="var(--fill-0, black)" id="Vector_5" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p12bb6df0} fill="var(--fill-0, black)" id="Vector_6" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p274ee400} fill="var(--fill-0, black)" id="Vector_7" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p20521f00} fill="var(--fill-0, black)" id="Vector_8" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p10eccf00} fill="var(--fill-0, black)" id="Vector_9" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p20cacd00} fill="var(--fill-0, black)" id="Vector_10" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p32ca9bb0} fill="var(--fill-0, black)" id="Vector_11" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p97e400} fill="var(--fill-0, black)" id="Vector_12" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p125f1800} fill="var(--fill-0, black)" id="Vector_13" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p17cae700} fill="var(--fill-0, black)" id="Vector_14" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p19524b00} fill="var(--fill-0, black)" id="Vector_15" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p372e7a00} fill="var(--fill-0, black)" id="Vector_16" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pd240170} fill="var(--fill-0, black)" id="Vector_17" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p15789d00} fill="var(--fill-0, black)" id="Vector_18" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p1fa49880} fill="var(--fill-0, black)" id="Vector_19" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p38962700} fill="var(--fill-0, black)" id="Vector_20" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2d8fa500} fill="var(--fill-0, black)" id="Vector_21" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p1074a880} fill="var(--fill-0, black)" id="Vector_22" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2c096200} fill="var(--fill-0, black)" id="Vector_23" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p295615f0} fill="var(--fill-0, black)" id="Vector_24" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p651f800} fill="var(--fill-0, black)" id="Vector_25" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3dcfda80} fill="var(--fill-0, black)" id="Vector_26" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.paa2ad00} fill="var(--fill-0, black)" id="Vector_27" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3dbb6a00} fill="var(--fill-0, black)" id="Vector_28" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2bd7ee80} fill="var(--fill-0, black)" id="Vector_29" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2d9b700} fill="var(--fill-0, black)" id="Vector_30" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p31da2a00} fill="var(--fill-0, black)" id="Vector_31" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p4020d80} fill="var(--fill-0, black)" id="Vector_32" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p16082d00} fill="var(--fill-0, black)" id="Vector_33" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p65a8380} fill="var(--fill-0, black)" id="Vector_34" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2e8fec70} fill="var(--fill-0, black)" id="Vector_35" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2e169b00} fill="var(--fill-0, black)" id="Vector_36" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p24278600} fill="var(--fill-0, black)" id="Vector_37" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pa08ddc0} fill="var(--fill-0, black)" id="Vector_38" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p31b5f700} fill="var(--fill-0, black)" id="Vector_39" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3e539400} fill="var(--fill-0, black)" id="Vector_40" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p26e67370} fill="var(--fill-0, black)" id="Vector_41" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p6dfeb00} fill="var(--fill-0, black)" id="Vector_42" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3a74a900} fill="var(--fill-0, black)" id="Vector_43" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p37733c80} fill="var(--fill-0, black)" id="Vector_44" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3015fc00} fill="var(--fill-0, black)" id="Vector_45" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p379f2e70} fill="var(--fill-0, black)" id="Vector_46" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3b3c4c80} fill="var(--fill-0, black)" id="Vector_47" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p23daeb80} fill="var(--fill-0, black)" id="Vector_48" style={{ fill: "black", fillOpacity: "1" }} />
          </g>
          <path d={svgPaths.p1ed8600} fill="var(--fill-0, black)" id="Vector_49" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p2ad02a80} fill="var(--fill-0, black)" id="Vector_50" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p17beee70} fill="var(--fill-0, black)" id="Vector_51" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p33987500} fill="var(--fill-0, black)" id="Vector_52" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p11e64b00} fill="var(--fill-0, black)" id="Vector_53" style={{ fill: "black", fillOpacity: "1" }} />
          <g id="Group_2">
            <path d={svgPaths.p210aef00} fill="var(--fill-0, black)" id="Vector_54" style={{ fill: "black", fillOpacity: "1" }} />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p2d0a9e00} fill="var(--fill-0, black)" id="Vector_55" style={{ fill: "black", fillOpacity: "1" }} />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative shrink-0 size-[43.658px]" data-name="Лого_Frame">
      <Component />
    </div>
  );
}

function Mvs() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="mvs">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">За підтримки:</p>
      <div className="content-stretch flex gap-[1.679px] h-[43.659px] items-center relative shrink-0" data-name="Логотипи ЦОВВ">
        <Frame />
        <div className="font-['Montserrat',sans-serif] font-semibold leading-[0] relative shrink-0 text-[8.96px] text-black whitespace-nowrap">
          <p className="leading-[1.1] mb-0">Міністерство</p>
          <p className="leading-[1.1] mb-0">внутрішніх справ</p>
          <p className="leading-[1.1]">України</p>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="h-[23.402px] relative shrink-0 w-[119.25px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.25 23.4021">
        <g id="Group 20">
          <g id="Group 19">
            <mask height="19" id="mask0_3_10653" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="120" x="0" y="2">
              <path clipRule="evenodd" d={svgPaths.p283f8700} fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 18" style={{ fill: "white", fillOpacity: "1" }} />
            </mask>
            <g mask="url(#mask0_3_10653)">
              <path clipRule="evenodd" d={svgPaths.p2d183d80} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 17" style={{ fill: "black", fillOpacity: "1" }} />
            </g>
          </g>
          <path clipRule="evenodd" d={svgPaths.p2e30f700} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 1" style={{ fill: "black", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p1f4b1200} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 3" style={{ fill: "black", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p17ffc00} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 5" style={{ fill: "black", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p1a819f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 8" style={{ fill: "black", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p393f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 10" style={{ fill: "black", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p2398d580} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 12" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Infotech() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="infotech">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">Розробник:</p>
      <Group7 />
    </div>
  );
}

function Developed() {
  return (
    <div className="col-4 content-stretch flex gap-[16px] items-start relative row-2 self-start shrink-0 w-[274.5px]" data-name="developed">
      <Mvs />
      <Infotech />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[32px] isolate items-center relative size-full" data-name="Desktop">
      <div className="bg-black content-stretch flex flex-col h-[73px] items-center shrink-0 sticky top-0 w-full z-[4]" data-name="header menu">
        <Head />
      </div>
      <Container />
      <div className="bg-[#f5f3e9] relative shrink-0 w-full z-[1]" data-name="footer">
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] px-[55px] py-[72px] relative size-full">
          <Logo />
          <Contacts />
          <Main />
          <About />
          <SocialMedias />
          <Payment />
          <Developed />
        </div>
      </div>
    </div>
  );
}