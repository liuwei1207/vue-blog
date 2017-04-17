<template>
    <div class="site-header">
        <div class="site-header__wrapper">
            <a href="#" class="site-header__avatar">
                <img src="../../assets/images/avatar.jpg" alt="头像">
            </a>
            <p class="site-header__info">
                <br>name : 'liuwei' ,
                <br>position : 'SuZhou',
                <br>job : 'Front-End-Engineer'
            </p>
        </div>
        <div class="site-header__foot">
            <ul class="site-icons">
                <li><a href="#" class="fa fa-qq"><span class="label">QQ</span></a></li>
                <li><a href="#" class="fa fa-github"><span class="label">Github</span></a></li>
                <li><a href="#" class="fa fa-weixin"><span class="label">Weixin</span></a></li>
                <li><a href="#" class="fa fa-envelope-o"><span class="label">Email</span></a></li>
            </ul>
            <ul class="site-copyright">
                <li>© China</li>
                <li>ver: 0.0.1</li>
            </ul>
        </div>
    </div>
</template>
<style type="text/css">
/* # =================================================================
   # site-header
   # ================================================================= */

.site-header {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    background-color: #1f1815;
    background-image: url("../../assets/images/overlay.png"), url("../../assets/images/bg.jpg");
    background-position: top left, top left;
    background-repeat: repeat, no-repeat;
    background-size: auto, cover;
    color: rgba(255, 255, 255, 0.5);
    height: 100%;
    left: 0;
    padding: 8em 4em;
    position: fixed;
    text-align: right;
    top: 0;
    width: 35%;
}

.site-header__wrapper {
    flex-shrink: 0;
    width: 100%;
    flex-grow: 1;
    margin: 0 0 2em 0;
    height: calc(100% - 15%);
    min-height: 400px
}

@media screen and (max-width: 980px) {
    .site-header__wrapper {
        min-height: 200px
    }
}

.site-header__avatar {
    margin: 0 0 1em 0;
    width: 6.25em;
    border-radius: 100%;
    border: 0;
    display: inline-block;
    position: relative;
}

.site-header__avatar:hover {
    transform: rotateY(180);
    -webkit-transform: rotateY(180deg);
    /* Safari 与 Chrome */
}

.site-header__avatar img {
    display: block;
    border-radius: 100%;
    width: 100%;
}

.site-header__info {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.35em;
    line-height: 1.75em;
    margin: 0;
    font-weight: 400;
}

.site-header__info strong {
    color: #fff;
}

.site-header__foot {
    flex: 0 0 auto;
}


/* # =================================================================
   # site-icons
   # ================================================================= */

.site-icons {
    margin: 1em 0 0 0;
    cursor: default;
    list-style: none;
    padding-left: 0;
}

.site-icons li {
    display: inline-block;
    padding: 0 1em 0 0;
}

.site-icons li a {
    color: rgba(255, 255, 255, 0.4);
    font-size: 24px;
    text-decoration: none;
}

.site-icons li a:hover {
    color: #49bf9d;
    transition: color .3s;
}

.site-icons li a .label {
    display: none;
}


/* # =================================================================
   # site-copyright
   # ================================================================= */

.site-copyright {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.8em;
    list-style: none;
    margin: 1em 0 0 0;
    padding: 0;
}

.site-copyright li {
    display: inline-block;
    line-height: 1em;
    margin-left: 0.75em;
    padding-left: 0.75em;
}

.site-copyright li:last-child {
    border-left: solid 1px rgba(255, 255, 255, 0.25);
}


/* 响应式布局 */

@media screen and (max-width: 980px) {
    .site-header {
        background-attachment: scroll;
        background-position: top left, center center;
        background-size: auto, cover;
        left: auto;
        padding: 6em 4em;
        position: relative;
        text-align: center;
        top: auto;
        width: 100%;
        display: block;
    }
}
</style>
