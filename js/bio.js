(function () {
    let biographyRequestToken = 0;

    function createBiography(fullName, spouse, sections) {
        return {
            sections: [
                {
                    icon: "📜",
                    title: fullName,
                    text: `Жубайы: ${spouse || "Маалымат кошула элек."}`
                },
                {
                    icon: "📍",
                    title: "Туулган жери",
                    text: sections.birthPlace || "Маалымат кошула элек."
                },
                {
                    icon: "🎓",
                    title: "Билими",
                    text: sections.education || "Маалымат кошула элек."
                },
                {
                    icon: "👨‍👩‍👧‍👦",
                    title: "Үй-бүлөсү",
                    text: sections.family || "Маалымат кошула элек."
                },
                {
                    icon: "🚛",
                    title: "Ишмердүүлүгү",
                    text: sections.activity || "Маалымат кошула элек."
                },
                {
                    icon: "🏡",
                    title: "Азыркы жашоосу",
                    text: sections.currentLife || "Маалымат кошула элек."
                }
            ]
        };
    }

    const STRUCTURED_BIOGRAPHIES = {
        root: {
            sections: [
                {
                    icon: "📜",
                    title: "Кулов Абдраман",
                    text: "Жубайы: Гүлай"
                },
                {
                    icon: "📍",
                    title: "Туулган жери",
                    text: "Кулов Абдраман 1937-жылы Ош облусунун Алай районуна караштуу Терек айылында жарык дүйнөгө келген. Ал ата-бабадан бери мал чарбачылыгы менен алектенип келген эмгекчил үй-бүлөдө чоңойгон.\n\nАнын атасы Кул ата өз доорунда кайраттуу жана акылман адам катары белгилүү болгон. Ал Кытай менен кыргыздардын ортосундагы байланышты бекемдеп турган Улуу Жибек жолу аркылуу Кытай тарапка өтүп, ал жактагы абал тууралуу маалымат алып келип турган. Бул кызмат азыркы тил менен айтканда эл үчүн жооптуу жана кооптуу иштердин бири болгон.\n\nОшондой эле Кул ата өмүр бою Алайдын жайлоолорунда төрт түлүк мал багып, эмгек менен жашап, балдарын да эмгекке тарбиялап өстүргөн. Абдраман ата да ошол тарбия менен чоңойгон."
                },
                {
                    icon: "🚜",
                    title: "Эмгек жолу",
                    text: "Абдраман ата жаш кезинен тартып мал чарбачылыгы менен алектене баштаган. Ал Алай районундагы Алай совхозунда баш чабан болуп иштеп, төрт түлүк малды багуу жана көбөйтүү ишинде чоң тажрыйба топтогон.\n\nАл айрыкча меринос породасындагы койлорду багууда жогорку жетишкендиктерге жетишип, мал чарбасында новатор катары таанылган.\n\n1976–1980-жылдары ар бир койдон алынган төл жана жүн боюнча эң жогорку көрсөткүчтөргө жетишип, мал чарбачылыгын өнүктүрүүгө чоң салым кошкон."
                },
                {
                    icon: "🎖",
                    title: "Сыйлыктары жана жетишкендиктери",
                    text: "Абдраман атанын эмгеги мамлекет тарабынан жогору бааланган.\n\n1967-жыл\n\nЦК ВЛКСМдин Ардак грамотасы\n\nКыргыз ССРинин айыл чарбасындагы социалисттик мелдештин отличниги\n\n1968-жыл\n\nСССР мамлекеттик чек арасын коргоодо чек ара аскерлерине жардам көрсөткөнү үчүн грамота\n\nАлай совхозунун райондук комсомол комитетинин грамотасы\n\n1969-жыл\n\nУдарник коммунистического труда\n\nПочетная Ленинская грамота\n\n1970-жыл\n\nКыргыз ССРинин айыл чарбасындагы социалисттик мелдештин отличниги\n\n1972-жыл\n\nЭмгек Кызыл Туу ордени\n\n1973-жыл\n\nСССР Министрлер Совети жана ВЦСПС тарабынан\nСоциалисттик мелдештин жеңүүчүсү\n\n1974-жыл\n\nКыргыз ССРинин мал чарбасына эмгек сиңирген устаты\n\nОшондой эле ал Ленин орденинин кавалери болуп, мал чарбасындагы жетишкендиктери үчүн көптөгөн медалдардын жана ардак грамоталардын ээси болгон."
                },
                {
                    icon: "👨‍👩‍👧‍👦",
                    title: "Үй-бүлөсү",
                    text: "Абдраман ата өмүрлүк жары Гүлай апа менен бирге чоң жана ынтымактуу үй-бүлө курган.\n\nГүлай апа 1940-жылы Ош облусунун Алай районуна караштуу Маданият айылында төрөлгөн. Ал эмгекчил, сабырдуу жана мээримдүү аял болуп, үй-бүлөнүн уюткусу болгон.\n\nЭкөө бирге он баланы тарбиялап өстүрүшкөн. Балдарына адептүүлүктү, эмгекчилдикти жана ата-бабанын салтын үйрөтүшкөн.\n\nКөп балалуу үй-бүлөнү мыкты тарбиялап өстүргөндүгү үчүн Гүлай апа мамлекет тарабынан «Баатыр эне» наамына татыган.\n\nБалдары:\n\nАлайчы\n\nБуйаша\n\nАсилбек\n\nАсилбү\n\nЧынара\n\nЧолпонбай\n\nЭлмира\n\nМаксат\n\nСуйорбек\n\nАнарбек"
                },
                {
                    icon: "🏔",
                    title: "Жайлоо турмушу",
                    text: "Абдраман атанын өмүрү Алайдын жайлоолору менен тыгыз байланышта болгон.\n\nАл малдарын Алайдын кооз жайлоолору болгон Айланма жана Көк-Суу жайлоолоруна чыгарып багып келген. Бул жайлоолор кең жайыттары, таза абасы жана кооз жаратылышы менен белгилүү.\n\nАл жерлерде төрт түлүк мал багып, эмгектенип өткөн жылдар анын өмүрүндө өзгөчө орунду ээлеген."
                },
                {
                    icon: "🧠",
                    title: "Мүнөзү",
                    text: "Абдраман ата эл ичинде:\n\nэмгекчил\n\nакылман\n\nсабырдуу\n\nжоопкерчиликтүү\n\nадилеттүү\n\nадам катары таанылган.\n\nАл көп жылдык тажрыйбасы менен жаштарга кеңеш берип, айыл ичинде кадыр-барктуу инсан болгон."
                },
                {
                    icon: "🕊",
                    title: "Өмүрүнүн акыркы жылдары",
                    text: "Абдраман ата өмүрүнүн акыркы жылдарына чейин эмгектен кол үзбөй, үй-бүлөсүнө жана балдарына таяныч болуп жашаган.\n\n1998-жылы 4-мартта узакка созулган оорудан кийин дүйнө салган.\n\n✨ Абдраман ата — өз өмүрүн эмгекке арнап, мал чарбасын өнүктүрүүгө чоң салым кошкон, урпактарына үлгү болгон инсан катары эл эсинде калды."
                }
            ]
        },
        al: createBiography("Алайчы", "Ширин", {
            birthPlace: "Маалымат кошула элек.",
            education: "Маалымат кошула элек.",
            family: "Маалымат кошула элек.",
            activity: "Маалымат кошула элек.",
            currentLife: "Маалымат кошула элек."
        }),
        bu: createBiography("Бүайша", "Турат", {
            birthPlace: "Маалымат кошула элек.",
            education: "Маалымат кошула элек.",
            family: "Маалымат кошула элек.",
            activity: "Маалымат кошула элек.",
            currentLife: "Маалымат кошула элек."
        }),
        as: createBiography("Асилбек", "Калия", {
            birthPlace: "Маалымат кошула элек.",
            education: "Маалымат кошула элек.",
            family: "Маалымат кошула элек.",
            activity: "Маалымат кошула элек.",
            currentLife: "Маалымат кошула элек."
        }),
        as_zhyl: createBiography("Асилбү", "Сапар", {
            birthPlace: "Маалымат кошула элек.",
            education: "Маалымат кошула элек.",
            family: "Маалымат кошула элек.",
            activity: "Маалымат кошула элек.",
            currentLife: "Маалымат кошула элек."
        }),
        ch: createBiography("Чынара", "Анарбай", {
            birthPlace: "Маалымат кошула элек.",
            education: "Маалымат кошула элек.",
            family: "Маалымат кошула элек.",
            activity: "Маалымат кошула элек.",
            currentLife: "Маалымат кошула элек."
        }),
        cho: createBiography("Кулов Чолпонбай Абдраманович", "Гүльмира", {
            birthPlace: "Кулов Чолпонбай Абдраманович 1972-жылы 22-мартта Ош облусунун Алай районуна караштуу Сопу-Коргон айылында жарык дүйнөгө келген.\n\nАл көп балалуу үй-бүлөдө чоңоюп, он бир туугандын ичинде алтынчы болуп төрөлгөн.\n\nҮй-бүлөдө беш уул жана беш кыз бир туугандары менен бирге өсүп, бала кезинен тартып эмгекке жана жоопкерчиликке тарбияланган.\n\nТоолуу Алай аймагынын табияты, жайлоолору жана айыл турмушу анын мүнөзүнүн калыптанышына чоң таасир берген.",
            education: "1979-жылы мектеп босогосун аттап билим ала баштаган.\n\n1989-жылы Ош облусунун Алай районуна караштуу Нура айылындагы А. Беценный атындагы орто мектебин ийгиликтүү аяктаган.",
            family: "1991-жылы 8-июлда жубайы Гүльмира менен баш кошуп, үй-бүлөлүк жашоосун баштаган.\n\nБул үй-бүлөдө үч уул жана эки кыз тарбияланып өскөн.\n\nБалдары:\n\n• Бегимай — 1994\n• Муктарбек — 1999\n• Куштарбек — 2001\n• Мыктыбек — 2003\n• Кулпунай — 2005\n\nУчурда Чолпонбай жана Гүльмира сегиз неберенин мээримдүү чоң ата, чоң энеси болуп келишет.\n\nНеберелери:\n• Нуржайна\n• Аяна\n• Сыргабай\n• Барсбек\n• Аруужан\n• Фатима",
            activity: "Чолпонбай жаш кезинен тартып фермерлик жана мал чарбачылыгы менен алектенип келет.\n\nАл төрт түлүк мал багып, ата-бабадан калган мал чарбачылык салтын улантып келет.\n\nЧолпонбай атасынын жолун улап, мал чарбачылыгын өнүктүрүп, бул тармакта чоң тажрыйба топтогон.\n\nЧолпонбайдын жашоосунун чоң бөлүгү жайлоодогу турмуш менен байланыштуу.\n\nЖай мезгили келгенде ал малдарын Алайдагы кооз жайлоолордун бири болгон Айланма жайлоосуна алып чыгып багат.\n\nАйланма жайлоосу кең жайыттары, таза абасы жана кооз жаратылышы менен белгилүү.\n\nЖыл сайын туугандары жана жакындары ошол жайлоого барып, табият койнунда эс алып, бирге убакыт өткөрүп турушат.\n\nМындан тышкары Көк-Суу жайлоосу да анын жашоосунда өзгөчө орунду ээлейт. Бул жерде жай мезгилинен тышкаркы мезгилдерде да төрт түлүк малдын камы көрүлөт.\n\nЧолпонбай айыл ичинде кадыр-барктуу жана ишенимдүү адам катары белгилүү.\n\nАнын эмгекчилдиги, жөнөкөйлүгү жана адамдарга жардам берүүгө даярдыгы үчүн айылдаштары жана туугандары аны урматташат.\n\nМал чарбачылыгы боюнча чоң тажрыйбасы бар болгондуктан, көптөр ага кеңеш сурап кайрылышат.\n\nАл табият менен жашоону жакшы көргөн, мал чарбасын мыкты билген, үй-бүлөсүнө камкор жана туугандарына жардам берүүгө дайыма даяр инсан катары таанылат.",
            currentLife: "Азыркы учурда Чолпонбай үй-бүлөсү менен Ош облусунун Алай районуна караштуу Терек айылында жашайт.\n\nАл фермерлик ишин улантып, төрт түлүк мал багуу менен алектенип, үй-бүлөсүн адал эмгеги менен камсыз кылып келет.\n\nЖай мезгили келгенде малдары менен жайлоого чыгып, тоолордун кооз жаратылышында эмгектенип жашоосун улантат."
        }),
        el: createBiography("Элмира", "Абдыбек", {
            birthPlace: "Маалымат кошула элек.",
            education: "Маалымат кошула элек.",
            family: "Маалымат кошула элек.",
            activity: "Маалымат кошула элек.",
            currentLife: "Маалымат кошула элек."
        }),
        ma: createBiography("Максат", "Улан", {
            birthPlace: "Маалымат кошула элек.",
            education: "Маалымат кошула элек.",
            family: "Маалымат кошула элек.",
            activity: "Маалымат кошула элек.",
            currentLife: "Маалымат кошула элек."
        }),
        su: createBiography("Кулов Суйорбек Абдраманович", "Нурпери", {
            birthPlace: "Кулов Суйорбек Абдраманович 1980-жылдын 13-январында Ош облусунун Алай районуна караштуу Нура айылында жарык дүйнөгө келген. Ал Абдраман ата менен Гүлай апанын үй-бүлөсүндө тарбияланып өскөн. Үй-бүлөдө он бир тууган болуп, беш уул жана беш кыз бир туугандардын арасында чоңоюп өскөн. Суйорбек үй-бүлөдөгү кенжеден бир мурунку бала болуп эсептелет. Балалык жана өспүрүм курагы Нура айылында өтүп, айылдын табияты, эмгекке болгон тарбия жана улууларга болгон урмат анын мүнөзүнүн калыптанышына чоң таасир берген.",
            education: "Алгачкы билимди Нура айылындагы мектептен алып, 1-класстан 8-класска чейин Нура айылында окуган. Андан кийин билимин улантуу үчүн Алай районундагы Терек айылындагы мектепке барып, 9-11-класстарды ошол жерде аяктаган.\n\nМектепти бүтүргөндөн кийин жогорку билим алуу максатында 1999-жылы Ош шаарындагы Ош технологиялык университетине (ОшТУ) тапшырып, экология багыты боюнча билим алган. Университетте беш жыл окуп, жогорку билим тууралуу дипломго ээ болгон.",
            family: "2003-жылдын 11-октябрында Суйорбек жубайы Нурпери менен баш кошуп, үй-бүлөлүк жашоосун баштаган.\n\nЖаш үй-бүлө алгач Терек айылында жашап, кийин Нура айылына көчүп келип жашоосун улантышкан.\n\nБул үй-бүлөдө беш бала тарбияланып өсүүдө:\n\nДенис — 2005-жылы төрөлгөн\nЭлиза — 2006-жылы төрөлгөн\nНуриза — 2006-жылы төрөлгөн (эгиз)\nАйзирек — 2012-жылы төрөлгөн\nТолкунбек — 2016-жылы төрөлгөн\n\nЖубайы Нурпери кесиби боюнча медицина кызматкери болгону менен, негизинен үй-бүлөсүнө кам көрүп, балдарды тарбиялоо менен алектенип келет.",
            activity: "Суйорбек жаш кезинен тартып эмгекчилдиги жана жоопкерчиликтүүлүгү менен айырмаланып келген. 2005-2010-жылдары Кытай менен Кыргызстандын чек арасындагы Эркечтам өткөрмө бекетинде BAYBOTO компаниясында иштеп, Кытай тарап менен байланыш жүргүзгөн өкүл болуп эмгектенген. Кийин бул ишкана ишин токтоткондон кийин жүк ташуу тармагына өтүп, КАМАЗ үлгүсүндөгү жүк ташуучу унаа сатып алып, алыскы жолдордо жүк ташуучу айдоочу болуп иштей баштаган. 2014-2018-жылдары ABU SAXIY компаниясында иштеп, Кытайдан Ош шаарына жүк ташыган фура айдоочу болуп эмгектенген. Бул тармакта көп жылдык тажрыйба топтоп, өз ишин мыкты билген айдоочулардын бири болуп калыптанган.",
            currentLife: "2019-жылы үй-бүлөсү менен Ош шаарына караштуу Мады айылына көчүп келип, ошол жерде жашап калышкан. Балдары ошол жерде билим алып, өсүп келе жатышат. Ошол эле жылы Суйорбек жеке жүк ташуучу унаа сатып алып, жеке ишкер катары иштей баштаган. Азыркы учурда жеке фура айдап, жүк ташуу менен алектенип, үй-бүлөсүн адал эмгеги менен камсыз кылып келет. Ал эмгекчил, үй-бүлөсүнө камкор, жоопкерчиликтүү жана адамдарга жардам берүүгө даяр инсан катары таанылат. Бош убактысында аңчылыкка кызыгып, айыл чарба иштерине да көңүл бурат. Үйүнүн айланасында жер иштетип, дыйканчылык менен алектенип келет жана техникага кызыгып, унаалар менен иштөөнү жакшы көрөт."
        }),
        an: createBiography("Анарбек", "Асем", {
            birthPlace: "Маалымат кошула элек.",
            education: "Маалымат кошула элек.",
            family: "Маалымат кошула элек.",
            activity: "Маалымат кошула элек.",
            currentLife: "Маалымат кошула элек."
        })
    };

    function renderStructuredBiography(bio, container, nodeId) {
        if (!container) return;

        container.innerHTML = "";
        if (!bio || !Array.isArray(bio.sections)) {
            container.textContent = "Өмүр баяны азырынча кошула элек.";
            return;
        }

        const fragment = document.createDocumentFragment();

        if (nodeId === "root") {
            const photos = document.createElement("div");
            photos.className = "bio-photos";

            const avatar = document.createElement("img");
            avatar.className = "bio-photo avatar";
            avatar.src = typeof rootPhoto === "string" && rootPhoto ? rootPhoto : "assets/avatar.webp";
            avatar.alt = "Абдраман ата";
            avatar.loading = "lazy";
            avatar.decoding = "async";

            const portrait = document.createElement("img");
            portrait.className = "bio-photo";
            portrait.src = "assets/foto.webp";
            portrait.alt = "Абдраман ата";
            portrait.loading = "lazy";
            portrait.decoding = "async";

            const medals = document.createElement("img");
            medals.className = "bio-photo";
            medals.src = "assets/medal.webp";
            medals.alt = "Сыйлыктары";
            medals.loading = "lazy";
            medals.decoding = "async";

            photos.appendChild(avatar);
            photos.appendChild(portrait);
            photos.appendChild(medals);
            fragment.appendChild(photos);
        }

        bio.sections.forEach((section) => {
            const block = document.createElement("div");
            block.className = "bio-block";

            const title = document.createElement("h3");
            title.className = "bio-block-title";
            title.textContent = `${section.icon || ""} ${section.title || ""}`.trim();

            const text = document.createElement("p");
            text.className = "bio-block-text";
            text.textContent = section.text || "Маалымат кошула элек.";
            text.style.whiteSpace = "pre-line";

            block.appendChild(title);
            block.appendChild(text);
            fragment.appendChild(block);
        });

        container.appendChild(fragment);
    }

    function openFullLineageModal() {
        const modal = document.getElementById("bio-overlay");
        const titleEl = document.getElementById("bio-modal-title");
        const subtitleEl = document.getElementById("bio-modal-subtitle");
        const photoEl = document.getElementById("bio-modal-photo");
        const textEl = document.getElementById("bio-modal-text");
        const ancestorsEl = document.getElementById("bio-modal-ancestors");
        const structuredEl = document.getElementById("bio-modal-structured");
        const sectionTitleEl = document.querySelector("#sanjyra-modal .bio-section-title");
        if (!modal || !titleEl || !subtitleEl || !photoEl || !textEl || !ancestorsEl || !structuredEl || !sectionTitleEl) return;

        titleEl.textContent = "Кыргыз санжырасы";
        subtitleEl.textContent = "";
        subtitleEl.style.display = "none";
        photoEl.style.display = "none";
        sectionTitleEl.style.display = "none";
        textEl.style.display = "none";
        ancestorsEl.style.display = "none";
        ancestorsEl.textContent = "";
        structuredEl.innerHTML = FULL_LINEAGE_MODAL_HTML;
        renderLineageTimeline();
        structuredEl.style.display = "block";
        modal.style.display = "flex";
    }

    async function openBioModal(nodeId) {
        const node = familyData.find((item) => item.id === nodeId);
        if (!node || !canShowLifeStory(node)) return;

        const modal = document.getElementById("bio-overlay");
        const titleEl = document.getElementById("bio-modal-title");
        const photoEl = document.getElementById("bio-modal-photo");
        const subtitleEl = document.getElementById("bio-modal-subtitle");
        const textEl = document.getElementById("bio-modal-text");
        const ancestorsEl = document.getElementById("bio-modal-ancestors");
        const structuredEl = document.getElementById("bio-modal-structured");
        const sectionTitleEl = document.querySelector("#sanjyra-modal .bio-section-title");
        if (!modal || !titleEl || !photoEl || !subtitleEl || !textEl || !ancestorsEl || !structuredEl || !sectionTitleEl) return;

        const photo = node.id === "root"
            ? rootPhoto
            : (node.gender === "female" ? femalePhoto : (node.gender === "male" ? malePhoto : getGenderPhoto(node.name)));
        const isRootChild = node.parentId === "root" && node.id !== "root";
        let subtitleText = "";

        if (node.id === "root") {
            subtitleText = "Абдраман ата 1938 жыл\nГүлай 1940";
        } else if (isRootChild) {
            const partnerDate = node.partnerDate ? ` ${node.partnerDate}-жыл` : "";
            subtitleText = node.partner
                ? `${node.gender === "female" ? "Жолдошу" : "Жубайы"}: ${node.partner}${partnerDate}`
                : "";
        } else {
            const subtitleParts = [];
            if (node.bdate) subtitleParts.push(`${node.bdate}-жыл`);
            if (node.partner) {
                const partnerDate = node.partnerDate ? ` ${node.partnerDate}-жыл` : "";
                subtitleParts.push(`${node.gender === "female" ? "Жолдошу" : "Жубайы"}: ${node.partner}${partnerDate}`);
            }
            subtitleText = subtitleParts.join("\n");
        }

        titleEl.textContent = node.name;
        sectionTitleEl.textContent = "Өмүр баяны";
        sectionTitleEl.style.display = "block";
        structuredEl.innerHTML = "";
        structuredEl.style.display = "none";
        photoEl.style.display = (isRootChild || node.id === "root") ? "none" : "block";
        if (!isRootChild && node.id !== "root") {
            photoEl.src = photo;
            photoEl.alt = node.name;
        }
        subtitleEl.textContent = subtitleText;
        subtitleEl.style.display = subtitleText ? "block" : "none";
        textEl.textContent = "";
        textEl.style.display = "none";

        if (node.id === "root") {
            ancestorsEl.textContent = "Ата-тек: Адыгине → Кенчим → Жакшылык → Токобай → Карагене → Өмүрзак → Мамбет → Нурбай → Дүйшөбай → Кул → Абдраман";
            ancestorsEl.style.display = "block";
        } else {
            ancestorsEl.textContent = "";
            ancestorsEl.style.display = "none";
        }

        modal.style.display = "flex";

        const requestToken = ++biographyRequestToken;
        renderStructuredBiography(STRUCTURED_BIOGRAPHIES[node.id], structuredEl, node.id);
        if (requestToken !== biographyRequestToken) return;
        structuredEl.style.display = "block";
    }

    function closeBioModal() {
        biographyRequestToken += 1;
        const modal = document.getElementById("bio-overlay");
        if (modal) modal.style.display = "none";
    }

    window.openBioModal = openBioModal;
    window.openFullLineageModal = openFullLineageModal;
    window.closeBioModal = closeBioModal;
    window.renderStructuredBiography = renderStructuredBiography;
    window.STRUCTURED_BIOGRAPHIES = STRUCTURED_BIOGRAPHIES;
}());
