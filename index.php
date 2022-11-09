<?php
defined('_JEXEC') or die;
$app = JFactory::getApplication();
$doc = JFactory::getDocument();
$menu = $app->getMenu();
$lang = JFactory::getLanguage();
$template_url = $this->baseurl . '/templates/' . $this->template;
$doc->addStyleSheet($template_url . '/css/main.css');
$doc->addStyleSheet($template_url . '/css/style_ya.css');
$doc->addScript('https://www.google.com/recaptcha/api.js');
$is_home_page = $menu->getActive() == $menu->getDefault($lang->getTag());
?>
<!DOCTYPE html>

<head>
    <title>
        <?php echo JText::_('TPL_RMSKALI_NAMESITE'); ?>
    </title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <meta name="yandex-verification" content="f9e4233692159f9f" />
    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
    <jdoc:include type="head" />
    <script src="/templates/rmskaliby/js/main.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" type="text/javascript"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css" rel="stylesheet">

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () {
                (m[i].a = m[i].a || []).push(arguments)
            };
            m[i].l = 1 * new Date();
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(69746890, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true
        });
    </script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/69746890" style="position:absolute; left:-9999px;" alt="" /></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-146463598-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-146463598-1');
    </script>
</head>

<body>
    <jdoc:include type="modules" name="breadcrumbs" />
    <div class="main main_base">
        <header class="header compensate-for-scrollbar" id="header">
            <div class="header__top">
                <div class="main__container">
                    <!-- <div class="toggle-menu js-toggle-menu">
                        <jdoc:include type="modules" name="position3" />
                    </div> -->
                    <div class="header__left">
                        <jdoc:include type="modules" name="header__left" />
                        <a href="https://rmskali.by/"><img src="<?php echo $template_url ?>/images/logo.png"
                                alt="rmskali.by"></a>
                    </div>
                    <div class="logo">
                        <div class="logo_strok">
                            <h1>
                                <a href="rmskali.by">
                                    <?php echo JText::_('TPL_RMSKALI_NAMESITE'); ?>
                                </a>
                            </h1>
                        </div>
                        <div class="logo_kurs">
                            <?php echo JText::_('TPL_RMSKALI_NAMESITE2'); ?>
                        </div>
                    </div>
                    <div class="header__right">
                        <jdoc:include type="modules" name="header__right" />
                        <div class="lang-wrp">
                            <div class="langs">
                                <a href="https://rmskali.by/index.php/ru/">
                                    <?php echo JText::_('TPL_RMSKALI_LANGRU'); ?>
                                </a>
                                <a href="https://rmskali.by/index.php/ru/">
                                    <?php echo JText::_('TPL_RMSKALI_LANGBY'); ?>
                                </a>
                                <a href="https://rmskali.by/index.php/en/">
                                    <?php echo JText::_('TPL_RMSKALI_LANGEN'); ?>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-shadow"></div>
            </div>
            <nav id="navbar" class="nav">
                <div class="main__container">
                    <jdoc:include type="modules" name="menu" />
                </div>
            </nav>

        </header>

        <div class="content">
            <div class="top-info">
                <div id="snow-animation-container" class="top-info__row">
                    <!-- slider-->
                    <jdoc:include type="modules" name="position0" />
                </div>
            </div>
            <div class="main__container">
                <div class="content__inner main__row">
                    <div class="content__info">
                        <!-- component -->
                        <jdoc:include type="component" />
                        <jdoc:include type="modules" name="position1" />
                    </div>
                </div>
            </div>

        </div>

    </div>
    <div class="base-events-wrp">
        <!-- <div class="main__container"> -->
        <!-- servise -->
        <jdoc:include type="modules" name="position2" />

        <!-- </div> -->
    </div>
    <footer id="footer" itemscope="" itemtype="http://schema.org/WPFooter" class="footer">

        <div class="main__container">
            <div class="footer__row">
                <div class="footer__left">
                    <div class="social">
                        <div class="social__content">
                            <div class="social__item">
                                <a href="https://www.vk.com/rmskaliby" target="_blank" rel="nofollow" class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 25 25">
                                        <path
                                            d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z" />
                                    </svg></a>
                            </div>
                            <div class="social__item">
                                <a href="https://www.facebook.com/rmskali" target="_blank" rel="nofollow" class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                    <div class="copyright">
                        <?php echo JText::_('TPL_RMSKALI_REKVIZ'); ?>
                    </div>
                </div>
                <div class="footer__contacts">
                    <div class="footer__contacts-inner">
                        <div class="footer__contacts-element">
                            <a href="mailto:rsmu@kali.by" title="rsmu@kali.by" target="_blank"
                                rel="nofollow">rsmu@kali.by</a>
                        </div>
                        <div class="footer__contacts-element">
                            <p>
                                <?php echo date('Y') ?>&nbsp
                                <?php echo JText::_('TPL_RMSKALI_COPY'); ?>
                            </p>
                        </div>
                        <div class="footer__contacts-element">
                            <iframe title="yandex metrika" src="https://yandex.ru/sprav/widget/rating-badge/1033901280"
                                width="150" height="50" frameborder="0"></iframe>
                        </div>
                    </div>

                </div>
                <div class="search-wrp">
                    <jdoc:include type="modules" name="search" />
                </div>

            </div>
        </div>
    </footer>
</body>

</html>