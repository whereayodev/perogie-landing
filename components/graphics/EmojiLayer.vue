<template>
  <div>
    <img src="~~/assets/images/emojis/emoji-01.png" class="e emoji e-01" />
    <img src="~~/assets/images/emojis/emoji-02.png" class="e emoji e-02" />
    <img src="~~/assets/images/emojis/emoji-03.png" class="e emoji e-03" />
    <img src="~~/assets/images/emojis/emoji-04.png" class="e emoji e-04" />
    <img src="~~/assets/images/emojis/emoji-05.png" class="e emoji e-05" />
    <img src="~~/assets/images/emojis/emoji-06.png" class="e emoji e-06" />
    <img src="~~/assets/images/emojis/emoji-07.png" class="e emoji e-07" />
    <img src="~~/assets/images/emojis/emoji-08.png" class="e emoji e-08" />
    <img src="~~/assets/images/emojis/emoji-09.png" class="e emoji e-09" />
    <img src="~~/assets/images/emojis/emoji-10.png" class="e emoji e-10" />
  </div>
</template>
<style lang="scss">
.e {
  scale: 1.3;
}

.e-01 {
  position: absolute;
  width: 90px;
  height: 90px;
  left: calc(50% - 90px / 2 + 503.77px);
  top: calc(50% - 90px / 2 - 168.5px);
  transform: rotate(14.3deg);

  z-index: -1;

  @include sm {
    left: calc((50% - 90px / 2 + 503.77px) / 2);
    top: calc((50% - 90px / 2 - 168.5px) / 2);
  }
}

.e-02 {
  position: absolute;
  width: 88.99px;
  height: 88.99px;
  left: calc(50% - 88.99px / 2 - 571.51px);
  top: calc(50% - 88.99px / 2 + 15.21px);
  transform: rotate(-9.85deg);

  @include sm {
    left: calc((50% - 88.99px / 2 - 571.51px) / 2);
    top: calc((50% - 88.99px / 2 + 15.21px) / 2);
  }
}

.e-03 {
  position: absolute;
  width: 88.99px;
  height: 88.99px;
  left: calc(50% - 88.99px / 2 + 438.49px);
  top: calc(50% - 88.99px / 2 - 517.3px);
  transform: rotate(-12.8deg);

  @include sm {
    left: calc((50% - 88.99px / 2 + 438.49px) / 2);
    top: calc((50% - 88.99px / 2 - 517.3px) / 2);
  }
}

.e-04 {
  position: absolute;
  width: 88.99px;
  height: 88.99px;
  left: calc(50% - 88.99px / 2 - 578.45px);
  top: calc(50% - 88.99px / 2 + 354.99px);
  transform: rotate(28.2deg);

  @include sm {
    left: calc((50% - 88.99px / 2 - 578.45px) / 2);
    top: calc((50% - 88.99px / 2 + 354.99px) / 2);
  }
}

.e-05 {
  position: absolute;
  width: 80.03px;
  height: 80.03px;
  left: calc(50% - 80.03px / 2 - 549.99px);
  top: calc(50% - 80.03px / 2 - 318.77px);
  transform: rotate(-15deg);

  @include sm {
    left: calc((50% - 80.03px / 2 - 220) / 2);
    top: calc((50% - 80.03px / 2 - 318.77px) / 2);
  }
}

.e-06 {
  position: absolute;
  width: 100.74px;
  height: 100.74px;
  left: calc(50% - 100.74px / 2 + 555.37px);
  top: calc(50% - 100.74px / 2 + 572.95px);
  transform: rotate(-15deg);

  @include sm {
    left: calc((50% - 100.74px / 2 + 555.37px) / 2);
    top: calc((50% - 100.74px / 2 + 572.95px) / 2);
  }
}

.e-07 {
  position: absolute;
  width: 80.03px;
  height: 80.03px;
  left: calc(50% - 80.03px / 2 + 620.76px);
  top: calc(50% - 80.03px / 2 + 25.51px);
  transform: rotate(20.29deg);

  @include sm {
    left: calc((50% - 80.03px / 2 + 620.76px) / 2);
    top: calc((50% - 80.03px / 2 + 25.51px) / 2);
  }
}

.e-08 {
  position: absolute;
  width: 76px;
  height: 76px;
  left: calc(50% - 76px / 2 - 300.28px);
  top: calc(50% - 76px / 2 - 598.5px);
  transform: rotate(10deg);

  @include sm {
    left: calc(50% - 76px / 2 - 300.28px / 2);
    top: calc(50% - 76px / 2 - 598.5px / 2);
  }
}

.e-09 {
  position: absolute;
  width: 103px;
  height: 103px;
  left: calc(50% - 103px / 2 - 597.5px);
  top: calc(50% - 103px / 2 + 639.33px);
  transform: rotate(-12.52deg);

  @include sm {
    left: calc(50% - 103px / 2 - 272px);
    top: calc(50% - 103px / 2 + 639.33px / 2);
  }
}

.e-10 {
  position: absolute;
  width: 103px;
  height: 103px;
  left: calc(50% - 103px / 2 + 696.25px);
  top: calc(50% - 103px / 2 - 687px);
  transform: rotate(19.72deg);

  @include sm {
    left: calc(50% - 103px / 2 + 696.25px / 2);
    top: calc(50% - 103px / 2 - 687px / 2);
  }
}
</style>
