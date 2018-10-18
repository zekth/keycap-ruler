<template>
    <div ref="CreditCard" class="credit-container">
      <span class="brand">Da Keebs Kompany</span>
      <span class="card-number">1337 1337 1337 1337</span>
      <span class="exp">02/21</span>
      <span class="name">Mr. Foo Bar</span>
      <span class="company">r/MechanicalKeyboards</span>
      <div class="chip"></div>
    </div>
</template>

<script>
// ISO 7810 CreditCard size : 85,6 X 53,98 mm
export default {
}
</script>

<style lang="sass" scoped>
  .credit-container{
    z-index: -1;
    background: #bf8226; /* Old browsers */
    background: -moz-linear-gradient(top, #bf8226 32%, #000000 74%, #000000 74%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #bf8226 32%,#000000 74%,#000000 74%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #bf8226 32%,#000000 74%,#000000 74%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bf8226', endColorstr='#000000',GradientType=0 );
    font-family: montserratbold,sans-serif;
    color: #e0e0e0;
    position:relative;
    border-radius: 11px;
    width: 317px;
    height: 199px;
    span {
      position: absolute;
    }
    .brand{
      top: 12px;
      left: 21px;
      font-size: 25px;
    }
    .card-number{
      top: 110px;
      left: 26px;
      font-size: 21px;
    }
    .exp{
      top: 147px;
      left: 133px;
      font-size: 14px;
    }
    .name{
      top:156px;
      left: 21px;
    }
    .company{
      top: 172px;
      left: 21px;
    }
    .chip{
      width: 47px;
      height: 43px;
      position: absolute;
      top: 63px;
      left: 22px;
      background-color: #525252;
      border-radius: 5px;
    }
  }
</style>
