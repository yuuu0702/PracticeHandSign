window.onload = function() {
  let $balloon_left = $(".balloon1-left");

  $balloon_left.toggleClass("balloon_up");
};

$(function() {
  let $balloon_right = $(".balloon1-right");

  function konnitiwa2 (evt) {
    $balloon_right.toggleClass("balloon_up");
  }
  
  var trainer = new LeapTrainer.Controller();

  //こんにちはの動作
  trainer.fromJSON('{"name":"KONNITIWA2","pose":false,"data":[[{"x":-0.502856563240101,"y":-0.16061562277837538,"z":0.20139453673851793,"stroke":1},{"x":-0.3145032805951987,"y":0.11747542606912584,"z":-0.10895006779986938,"stroke":1},{"x":0.30259616532106326,"y":-0.12433301355592083,"z":0.02121186803777786,"stroke":1},{"x":0.38798652589525895,"y":0.061090176526610473,"z":-0.07307349000499111,"stroke":1},{"x":-0.1209023789529895,"y":-0.05084596598590824,"z":0.0068640119424816515,"stroke":1},{"x":-0.3255287923935964,"y":0.22647690161603082,"z":0.2582003696891958,"stroke":1},{"x":-0.031431950628021954,"y":-0.024666400709108388,"z":-0.12918163270164554,"stroke":1},{"x":0.47103201192314936,"y":-0.10225944300761909,"z":0.13650294961157267,"stroke":1},{"x":0.1859136960229596,"y":0.03584116028017276,"z":-0.15208572260297126,"stroke":1},{"x":-0.47185864661161053,"y":-0.09487948783258464,"z":0.21060964513772168,"stroke":1},{"x":-0.24756604285941136,"y":0.05936788152016076,"z":-0.1722496471220651,"stroke":1},{"x":0.497143436759899,"y":-0.18062821915980307,"z":0.1138303128160637,"stroke":1},{"x":0.39326212496958,"y":0.09645844985703886,"z":-0.25670340342435893,"stroke":1},{"x":-0.3586859118993645,"y":-0.12001999974770547,"z":0.12819182911112142,"stroke":1},{"x":-0.2628183293238245,"y":0.14673871170910865,"z":0.03776348882665431,"stroke":1},{"x":0.39821793561220864,"y":0.11479944519877669,"z":-0.22232504825520596,"stroke":1}]]}');
  trainer.fromJSON('{"name":"KONNITIWA2_1","pose":false,"data":[[{"x":-0.46072156253860774,"y":-0.2143977389794331,"z":0.18879356094977734,"stroke":1},{"x":-0.04790601673345496,"y":0.2927852318626851,"z":-0.012239015643416173,"stroke":1},{"x":0.27588359386325145,"y":0.49692982276347797,"z":-0.3484969078275498,"stroke":1},{"x":0.22822521524467498,"y":0.007061819198075248,"z":-0.17128645128397224,"stroke":1},{"x":0.08895720124422968,"y":-0.4870375766875573,"z":0.21275314056449784,"stroke":1},{"x":-0.41760617872481587,"y":-0.16228530617916465,"z":0.16849475149986665,"stroke":1},{"x":-0.003807182892994032,"y":0.34500657778691834,"z":-0.030227851978094578,"stroke":1},{"x":0.2998151722396567,"y":0.47175038947815273,"z":-0.40546700224218174,"stroke":1},{"x":0.2252618000591654,"y":-0.03229817453070766,"z":-0.14354404081467576,"stroke":1},{"x":0.04679648338266207,"y":-0.4658612735752236,"z":0.21103288926090485,"stroke":1},{"x":-0.3879514719852634,"y":-0.12732830403492346,"z":0.15538796408692884,"stroke":1},{"x":0.02868154652773791,"y":0.37874471013422173,"z":-0.040500702856420656,"stroke":1},{"x":0.12437140031375749,"y":-0.503070177236522,"z":0.21529966628433522,"stroke":1}]]}');
  trainer.fromJSON('');

  trainer.on('KONNITIWA2', konnitiwa2);
  trainer.on('KONNITIWA2_1', konnitiwa2_1);
  trainer.on('KONNITIWA2_2', konnitiwa2_2);
});