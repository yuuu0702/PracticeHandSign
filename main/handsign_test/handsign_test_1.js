$(function() {

  let $balloon_left = $(".balloon1-left");
  let $balloon_right = $(".balloon1-right");

  $balloon_left.toggleClass("balloon_up");
  $balloon_right.toggleClass("balloon_up");

  function konnitiwa1 (evt) {
    
    setTimeout(function(){
      $(".circle").css('display','none');
    }, 2000);
  }
  
  var trainer = new LeapTrainer.Controller();

  //こんにちはのこんにの動作
  trainer.fromJSON('{"name":"KONNITIWA1_1","pose":true,"data":[[{"x":0.1262944467941488,"y":-0.2512314586964694,"z":0.3472222222222222,"stroke":1},{"x":0.11113911317885095,"y":-0.22108368365289316,"z":0.30555555555555547,"stroke":1},{"x":-0.23743355997299975,"y":0.4723151423493626,"z":-0.6527777777777778,"stroke":1}]]}');
  trainer.fromJSON('{"name":"KONNITIWA1_2","pose":false,"data":[[{"x":0.18288467400011701,"y":0.03730895835555814,"z":0.2596142846850037,"stroke":1},{"x":-0.03598978768342352,"y":0.3045894129444864,"z":-0.1218016337662623,"stroke":1},{"x":-0.1121685443635812,"y":0.19866147865692108,"z":0.16600958197900828,"stroke":1},{"x":-0.05351428275132655,"y":-0.01362764683653589,"z":0.17269768068547686,"stroke":1},{"x":0.03978664756788361,"y":0.489258882796921,"z":-0.09548674219463454,"stroke":1},{"x":0.09773839297324938,"y":-0.0923590291494506,"z":0.20957138592511104,"stroke":1},{"x":-0.07318195439965355,"y":0.18390986511791274,"z":-0.3471052442397038,"stroke":1},{"x":-0.05404451997096575,"y":0.19866906147375807,"z":0.003747078159949402,"stroke":1},{"x":0.15355253625896434,"y":-0.1343174602371236,"z":0.21069847168865719,"stroke":1},{"x":-0.14922311323955365,"y":-0.02997424485034733,"z":-0.32944419249364726,"stroke":1},{"x":-0.05295873241960182,"y":0.11280056875929523,"z":-0.02208184249136369,"stroke":1},{"x":0.1411818529233054,"y":-0.18776249055576755,"z":0.1745524083920944,"stroke":1},{"x":-0.09868414305623752,"y":-0.042041095590484856,"z":-0.3221299156734383,"stroke":1},{"x":-0.12094504879957496,"y":0.09715934894998557,"z":0.1440002990749708,"stroke":1},{"x":-0.05240294696735481,"y":-0.202413054236111,"z":-0.02409140574557861,"stroke":1},{"x":0.05757495636519422,"y":-0.013956844796624568,"z":-0.2711585232864205,"stroke":1},{"x":0.16297391417443133,"y":-0.26081574445212685,"z":0.21602347706389435,"stroke":1},{"x":0.012449634235072199,"y":-0.13434884914718942,"z":-0.29572924504451265,"stroke":1},{"x":-0.04502953484694423,"y":-0.510741117203079,"z":0.2721140772813957,"stroke":1}]]}');
  trainer.fromJSON('{"name":"KONNITIWA1_3","pose":false,"data":[[{"x":0.13082380503745986,"y":0.0941524359480369,"z":0.19971679356951155,"stroke":1},{"x":-0.04154218658974948,"y":0.4093852474495062,"z":0.002559420912865651,"stroke":1},{"x":-0.10304935372401303,"y":0.1314592235243336,"z":0.0899011693487935,"stroke":1},{"x":-0.06694310312986142,"y":0.1326542837613619,"z":0.07699345122157325,"stroke":1},{"x":0.05536531450642851,"y":0.46883612517473794,"z":-0.0628637375226605,"stroke":1},{"x":0.01868699013526777,"y":-0.16393014096018166,"z":0.07419607765292469,"stroke":1},{"x":-0.0015590085518414482,"y":0.21000010507074196,"z":-0.05532894194858767,"stroke":1},{"x":0.08145393486761734,"y":0.10567526334302368,"z":-0.05409955886350892,"stroke":1},{"x":-0.06009674542541632,"y":-0.22176825346670254,"z":0.13764913580921118,"stroke":1},{"x":0.018279772944342215,"y":0.22180659723394447,"z":-0.2088161658387937,"stroke":1},{"x":0.10133274864154856,"y":-0.09076858250799497,"z":0.0031778082794461926,"stroke":1},{"x":-0.047726095199095944,"y":-0.1831821779413924,"z":0.06583090346426163,"stroke":1},{"x":0.038080193071328816,"y":0.1847375582422165,"z":-0.3408866394008879,"stroke":1},{"x":0.0918645495931138,"y":-0.22099617275333677,"z":0.08464847869427211,"stroke":1},{"x":0.009602499345588003,"y":-0.11002938706493559,"z":-0.170289050624464,"stroke":1},{"x":-0.1039291438714956,"y":-0.022594310081719637,"z":-0.08259322808114039,"stroke":1},{"x":-0.042243585721890485,"y":-0.4142739401463781,"z":0.09132470377952351,"stroke":1},{"x":-0.07840058592933109,"y":-0.5311638748252621,"z":0.14887937954766017,"stroke":1}]]}');
  trainer.fromJSON('{"name":"KONNITIWA1_4","pose":true,"data":[[{"x":0.30970419915481756,"y":-0.046259391109065295,"z":0.07083040482798014,"stroke":1},{"x":0.1388980221566108,"y":0.09055138172930433,"z":0.0445922272296716,"stroke":1},{"x":-0.03190815484159601,"y":0.22736215456767395,"z":0.018354049631363084,"stroke":1},{"x":-0.2027143318398028,"y":0.36417292740604357,"z":-0.007884127966945473,"stroke":1},{"x":-0.21397973463002956,"y":-0.6358270725939564,"z":-0.12589255372206934,"stroke":1}]]}');

  //ちはの動作
  trainer.fromJSON('{"name":"KONNITIWA2_1","pose":false,"data":[[{"x":-0.5878217430628185,"y":-0.09083572716561944,"z":0.2014366468337455,"stroke":1},{"x":0.1140237880314654,"y":-0.13586134848532777,"z":0.10003121951930669,"stroke":1},{"x":0.41217825693718146,"y":-0.009495909012363551,"z":-0.03787515260131594,"stroke":1},{"x":-0.1532567646378698,"y":0.06913865074120423,"z":0.014352619457496912,"stroke":1},{"x":-0.38121211068661587,"y":-0.10420846297694603,"z":0.1682151193242358,"stroke":1},{"x":0.3209871863817608,"y":-0.1491511158608808,"z":0.06925137884572038,"stroke":1},{"x":0.2884492744210201,"y":0.1391731145963333,"z":-0.12236779938259189,"stroke":1},{"x":-0.28845864937222276,"y":0.03196775398013696,"z":0.05773161832496368,"stroke":1},{"x":-0.35057543714393063,"y":-0.06016788845822661,"z":-0.0650346694599106,"stroke":1},{"x":0.2598364486286978,"y":-0.11527952249590806,"z":-0.07111740806598263,"stroke":1},{"x":0.35032790957610493,"y":0.08984253492303917,"z":-0.10733259766731455,"stroke":1},{"x":-0.19275560648316215,"y":0.07990656279636643,"z":0.0011863660876829663,"stroke":1},{"x":0.20827744741039056,"y":0.2549713574181924,"z":-0.20847734121603653,"stroke":1}]]}');
  trainer.fromJSON('{"name":"KONNITIWA2_2","pose":false,"data":[[{"x":0.49751752321750076,"y":-0.15326721274759506,"z":0.12798924504377468,"stroke":1},{"x":0.19538772781441072,"y":0.13731681179161234,"z":-0.043103771608840574,"stroke":1},{"x":-0.019896648607493295,"y":0.06412766179467272,"z":-0.15666579638172715,"stroke":1},{"x":-0.45038516657845284,"y":-0.11639817653702464,"z":0.15861038861716648,"stroke":1},{"x":-0.276893493696731,"y":0.08864727556312291,"z":-0.17658835580340143,"stroke":1},{"x":0.14296120902209064,"y":-0.006396229194259001,"z":-0.06685019658133406,"stroke":1},{"x":0.40023301395382993,"y":-0.06292494061382234,"z":0.12148825419296228,"stroke":1},{"x":0.18030522176378005,"y":0.14488570011468346,"z":-0.17436860847256286,"stroke":1},{"x":-0.16717501571071847,"y":0.004937414369174997,"z":-0.04423597855563219,"stroke":1},{"x":-0.44000488710368835,"y":-0.08337569865574546,"z":0.10732515478066734,"stroke":1},{"x":-0.12639934418048648,"y":0.10580442361114265,"z":-0.20914225226163358,"stroke":1},{"x":0.3385649125234066,"y":-0.08635471119485436,"z":0.0442193907233665,"stroke":1},{"x":0.22826742436504976,"y":0.10324088708206805,"z":0.11102751328014548,"stroke":1},{"x":-0.5024824767824992,"y":-0.14024320538317664,"z":0.200295013027049,"stroke":1}]]}');
  trainer.fromJSON('{"name":"KONNITIWA2_3","pose":false,"data":[[{"x":-0.5321781641592274,"y":-0.004161722254379163,"z":0.11624104941483293,"stroke":1},{"x":0.18301382105558173,"y":-0.057128328088206975,"z":0.0864267748088367,"stroke":1},{"x":0.46782183584077264,"y":0.12236442791475513,"z":-0.12262666225944799,"stroke":1},{"x":0.00020034153398074128,"y":0.2001667575420402,"z":-0.14574864870714807,"stroke":1},{"x":-0.43499217227172016,"y":-0.010544449901011194,"z":0.1109831299055099,"stroke":1},{"x":0.2801905847070256,"y":-0.06419456165839332,"z":0.08218699044136812,"stroke":1},{"x":0.3954563850850682,"y":0.17153288257102303,"z":-0.1837321490657316,"stroke":1},{"x":-0.1297011638623497,"y":0.14084350293776496,"z":-0.08926282142220157,"stroke":1},{"x":-0.4585902167827695,"y":-0.21973472815316403,"z":0.0957563225166575,"stroke":1},{"x":0.15067367091897732,"y":-0.14494607362712802,"z":0.07009115665960336,"stroke":1},{"x":0.39454915710177507,"y":0.061733685390213816,"z":-0.0776453773151759,"stroke":1},{"x":-0.15952753751011556,"y":0.10861315405129171,"z":-0.06406199453481,"stroke":1},{"x":-0.4992302417084689,"y":-0.23180681493499414,"z":0.06955732757130995,"stroke":1},{"x":0.21232066431602092,"y":-0.13753216138076718,"z":0.07079258151100976,"stroke":1},{"x":0.12999303573544863,"y":0.0647944295909548,"z":-0.018957679524613164,"stroke":1}]]}');
  //trainer.fromJSON('');

  trainer.on('KONNITIWA1_1', konnitiwa1);
  trainer.on('KONNITIWA1_2', konnitiwa1);
  trainer.on('KONNITIWA1_3', konnitiwa1);
  trainer.on('KONNITIWA1_4', konnitiwa1);

  trainer.on('KONNITIWA2_1', konnitiwa2);
  trainer.on('KONNITIWA2_2', konnitiwa2);
  trainer.on('KONNITIWA2_3', konnitiwa2);

});