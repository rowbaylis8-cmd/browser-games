/* Shared arcade paywall. Include with:
   <script src="paywall.js" data-game-id="ID" data-game-name="Name"></script> */
var PAYWALL_ENABLED = false;
var PAYMENT_LINKS = {
  'alien-builders': 'STRIPE_LINK_PLACEHOLDER',
  'arena_vr': 'STRIPE_LINK_PLACEHOLDER',
  'blockhouse': 'STRIPE_LINK_PLACEHOLDER',
  'blocksurvival': 'STRIPE_LINK_PLACEHOLDER',
  'dusty-trail': 'STRIPE_LINK_PLACEHOLDER',
  'footy': 'STRIPE_LINK_PLACEHOLDER',
  'lighthouse': 'STRIPE_LINK_PLACEHOLDER',
  'morphlink': 'STRIPE_LINK_PLACEHOLDER',
  'pocket-pixel-rumble': 'STRIPE_LINK_PLACEHOLDER',
  'singer': 'STRIPE_LINK_PLACEHOLDER',
  'soccer': 'STRIPE_LINK_PLACEHOLDER',
  'swamp': 'STRIPE_LINK_PLACEHOLDER',
  'tumbleweed-ranger': 'STRIPE_LINK_PLACEHOLDER'
};
var PAYWALL_OWNER_HASH = 'c343fc3581ad8a58bbc8fbc6269cfe92308888702cf603a6854f5b5a08e4a282';
var PAYWALL_GAME_HASHES = {
  'alien-builders': ["3a1a3e634eef509bac28dd3bd38487a30a19b55c31ae23d6d0239a9d3be082fe", "ee0d3af717dc254daef5d00a45ed0c8966e95802a727a85c01f80f39f5a13a7b", "2f959964ad4e0680a491299ea6756de10b72f4866a4da59519a1c96e24a22980", "4ccd5913c10be8255cb15da4ac00a038396f0896b7bed3281075747dc10f29a2", "c6e8bdd58b6ae903a8a1f48de7167f2068fb4377dac2197a324c51f185de36e3", "6d667435db4554d854999f760560aebc8571fd81da8e17c017ee4826cbced81e", "6bd41cb56d072ec0ddef54ec2dcd559ac01810a161437ccbc23d10f797b3763f", "4e1a20c70f4f64db53d09d7ef0100f5387d8f6c39e55aec969518a91bbb9e68e", "a207309a757c7fb34efa8df8c4c3a42451aa6166ff55ff940041b47a6a357ca8", "50fe59a197bf8f79227075bc767e6c9e87e3421fdd3f8f653adfed6c156c67ff", "f45ce2d2c7f61e4d1655e55de1aa3bb1a28d920cee59eabe5482133c6e14319e", "934e6b2812ddfb257afaa410cfcedba34f9c8abc30018139b15e51d4397431f1", "7e99b890c5f8dcc578de66a38aa0aa67e478a33611f88a6b1997290f2ee1cd8b", "ba4c4a3b43ad930f2dca57cf0f5284999d72d1c3c20d8cd76fb3103ef4dbad8a", "0f81c9a0c84e33fb1fccf336c61cc553825929560fee4bb35e39e42d16332054", "604fa22fb01b39dbe47e0dbd3c10a7dba08e96aecf785f5f907f4a43639efd36", "1b687163600f286c2bdd90d0865d0df095d5abea10fb3ea46b68b4469e3557c5", "c06a41c4af4965b85a437bd9d71bb58eb35a8ee9dc8aa45bb5528844d6bbb2ca", "9970f86ef7c9930d886eee2f12bec9053fd24435b58fd27803d5712b77b533b1", "213df416656cadd2fd99176b32fd7b34f05cf539be02d602fd9d14ec860ee1f0"],
  'arena_vr': ["2f4190b045769945c42d3d3c6e70512c40ae8e90461ed18f2f25584dc679ece9", "535f695ea351207d0b643c8e9093cdbb12a62f2501520d44ae58d760382bee78", "3b796b277320d9cc75a64212b22bc57f40448286deaa5988fb720c2f52ed396b", "d1006303e4ec25555da5b7a531874845f3c9ee067f0101c7073e81a2ffca59b3", "7617902fcdc0285e3e9d2fcd3fb2962e9f9506afab70295382c911b688c93c68", "ef18c88ccd8f07b74fe07ce1eb9934603deac8a9e47f362d427d94f5132fc93c", "82db11732cdc9bc3eefb2b789b19d0d2b5d6f34cc34c6612632af85427523c71", "4efbc0221cd3ae925b5bba959d464149e9dd6e2c753cb3f4ba0108bdf933e094", "5db793d6549471caa3e1ed4882c0b04bedf608b6ea205524a75be7d15f0ccd12", "aa5dc84e2125e2d8fb96277b0ac5389035783ecf563aae5f5c71dff431befe4e", "364b6df493c8b1593fdc47bcd6f4b76b60a3f7917e160e451c9f51d1f0cf663c", "f90756690b6f616c61f1efcb5fe600b8b8dfcfba33fbe021ffa53891868416e1", "d632b670425f8e1a58229002a4c7bf082934ea8cf787616167d70ddd3d1f4da2", "ebc4034da80edb498b4b72df6b8535ffa908dc4b745e719d96f33196d14f1f94", "e71abbf479f4b0742a140ad3e1b4096dc111902ff48262d998540dc4e2b7aa64", "febb2769e147e043b6c43a31d7e4e3b7acf764e2971710fbf4ed49e85dc0aad0", "38a9e99fcf9d84cb9a953152f03998ff850bbcdb875313c0aa7becd2bca737f9", "9e15d95a7be79754a5c7c0c7fede8c8c854b79a62d2d32e78c1565d700e5da83", "8061ac60b0cfd9845a106b1be623892f48effe4b70c60d1f4305b64181deea8d", "1aee86361f29d7980abbd6a97bdab0faa788fb0f4d565431522f44bf072b0fff"],
  'blockhouse': ["a4e95247cf79d391df329c9df5fb91721be9fde55e83b30d243738ab48a38464", "c53819b3643c43a756586d76bcf8b7106a2a83c48dcb4d1aa134119b86bcfd01", "7aded49a79b61506d64e50fafb5e5531a0422db12cae374227d7e86d6b3ff46e", "9d39f77f6c437450af0d94bb3339b764923d0892d32416b164e4a947d2d14671", "68012ce9320f782eac2e62ee2d51eb2216b743e393617653034c6a18ff0e4d81", "da5b33547bb19c97620ed684f14bb61a4f6de2a312e8ad995c8243d85fc3e12f", "8dc06e1933a828e8a321f719b7e62096bc3629ee09add05567c8afb2f3ac8813", "d169868b40d30ac8fe221717da7a2bb753ec4903d589a6c1105ac6bf7730ff24", "1b53a16a58cd2109e3858341c1027df9defcad1525acf2e3634a01e5244098a9", "9a6cefa268e9ee50a9416d1ff5d35a948656689bb5dc7fa00643889e987bdb88", "cd1cfe4638091b2bdd65a2c63372fdcbe2c0f1c7a3dd89d744ed2f64bf37a0fe", "469e56af829c02d604d003c4fbc6449eeeac056185dbbb3ea102378715da3ec9", "6b0b61b96207d0457b180583b85165fe57a23e6a3be604c2d3592e1db60503d4", "eebf6b34b26397fc133e1c1c458196b1d3afd6f9f4430b50b0b0718a801257db", "d7ce8c948e8590ad45cb1d63e99eb9a77122d2cc91976d883e5173bfcfc71e32", "b49d1b7ef771ce470dc560e1e2538c93ea58682d02039fa237dcba964f7c1a0a", "072f4d491dd9dd8a4ebc14ef228d9d8080c84cf432a246ec43f7be7dc6d1d031", "9e05e673bc66f114ed3c4c368254ec1a5e02c2e177f512d7cc812bf9164df39a", "061e990a3f91661b4dc608dd6dc8845cc43951546e903baceaeb9375bf6c0e7a", "adf566eeb8534f90b1a88a29ad6067448112113d8cfc14afeb3dc84544ed373a"],
  'blocksurvival': ["35090d4441148eccb1f0ea0763ffbb5afc8fdd47c675c5904cb4e2f528fb7388", "8ca76da76178e0db0bab010b6e08297b7efd87980c6b7eb8f4953736bb986d57", "b63088b6271c6e5d761ab80844a558114f9e51aab292adf2bf105bd571c7c4ec", "329f4e479b52360b83fc35cded487d282bac456943237a5851e5a61c17ffcbaf", "ccb5f81e0685739e09de3f049d5607d2a403bcb228d0e07f32d3250e7d2955ea", "d87f9dfbdcc3aedb099126321cce53e1a7dace1fc43e366827b067b1b80c9737", "d2a02dbd39086f77faad8eb01bff10fb2ac087d7f128b942dbe2939099b06349", "0862017ec4b8d2c277675f5cbdaa5520dba937ec7e41d6f75469289490a3d610", "6d0a1fd08a20a5603810b6c988af509a0bc0e1b0bcdbcc935c0933bfe9d2cf12", "d7d6f91641a4ed10cde1bea03b62b4e3de47d19e0d8c1199ccc05826c2008d3a", "0994267655a80357dcabc27b8fa9aa0c9f702b1b23e6811222828a00d2998622", "ea056106922c8551e73ed929d9f3818b6d6e43cc23786f9c3cd2a14b524c4073", "243191ee01486b033b4b58dbd31a492162391329379fc39b0a513efe06d2ed52", "fc84cf32c5352196af7c90404396b57ec002cce8763f5c728af04d86fbb2b97c", "9441dd769300b545456f30c8c5e8c4be6e909f2792a37c157b68da4a3638943a", "f7ac8f5e6ff331ba440677733090c73945d9ebac6b58d6c0e7b7094ffd829e4e", "1d460ce8b3ebbf230957f57e0b1556469a4f4ad2197a7433aafc878051e03c6c", "29973720fd04c6d00bdb2ba1058a0fc9cf7e2dc6256718f692e3e3d2dc735515", "4aae70f168c2c3503982f7dd6618c5d09b2183e3d34bc38eac6ced9869893f09", "133f815c487206ee276541512cf509b707d2d32cff0cfa04c6e78c3555226218"],
  'dusty-trail': ["3432d0b59162659e82ec8e9f66bf1fb8953a9fa8982d8b8e7411ec224a9253fc", "232b7e6191c5b54cf570ef6c2bae9b5624cec55747d56a5b767bdcc4c54ae3b0", "8afdabc63c6a439066c75d7307c2e197f7651b1272dbc168dc3d9fd23aaeb24e", "f722aea5deceb80f40694465fa617a1704956376a533c8f5fe16e1abe27cea5c", "c79ba283f70f1f0e20ef7e635803c6fa3da66fb80c0fc85c4944234d75909dfe", "ed97701dd73fa8c667554810d39f58253d55551d680c28ede8ae4f60522cd8b5", "d7b85d675ff5617bcf688a5b53648ef037789735d4e950ab596acef8577b2ba5", "88ac112ae7f250077b9e8eb06f6974823eae44635f55ce9bfbbb6f441cb607c4", "a3fc2ef9ef655d9d3d1f956a4f5e49edce47e2b57f914d6a15ce1787669d2831", "3bb8edbcc38f63536a91cebbbae2245c8c4e2f387140b478ca7b26f81540477f", "090fc6812ae9d39dc84c444b0295be368bf7fb6646d8236b07d185507dd04564", "a0d44e09c824b9f494498abcce26dfb56c8aae843e7ad767954b64c7bd72ded2", "a63b04448b7befb870b3fbeb7c36556c4f07ff8f25ceab9b1776a5c8a68b58f0", "52016956260866a4e213d5e5ca28d1a5ec3d510f9aa1f7f29f7c01e6cd33f0ce", "4c87f9982d2bafcc6022f94609f543b3723cf968e2d32fe856a29b2a2b070423", "2fdaa7e3cf65f11d9c06a0128cddf932b7c029d0cf431547c3cbe1a856b0a2d4", "a2569035a539ca0c31052e69a9bcc14d736f892111fe7e2d3de00acf15b1f116", "bb7dfc783fd87b7effef9a9b5b39a5f1f95aa14acb2177da931f27fb77479d8d", "4a793d32e26a0ba5aabd1e10c5757226fc4a2049af5440d0e63ccb31cf31e5a2", "470fd692c6fb6aa0da5907d43f1a2834a82c71b76b8d8efc0f01d8649c4c6a09"],
  'footy': ["954e12880ba32bf5db599f3a334dc1b42c3afa27afc51c4c03775d1e92c09f3d", "e2f1829335039b314a7463faff9c2f34101211c29e22696209676d4a8b6be9ac", "de5ececf50f34948a6e1ab2e90458f90607934fb6bd7ce61e64c00c49ab0b850", "293d7ad2d818fbbe5c832e38aa7169c66b31559e35fa134f2c1b565cfc642f94", "64af5476444af72de09abac027cc9304f49514d8ea2f4859b8f712aaff3d9e82", "4d66340942000519ae43edc8284287dc6bdf4a74479b091831c0fcea6ce3e4e4", "f49948bd1ca2c7daf9591e309571c28a9c32bec89f41b1fc9c176c7339be7196", "f598c64d49e5e8b3d1133b1081910a71028ed6e94d7642cdee0a60b9da962f6e", "6fdc28da64db1dfaf9c3d2783f909f23f2e3b7adf677e0a6c47a017173c23a3e", "8a6e137d7ac2b8cbd9b49da81a43237b9b6031a8142ffb6909df06df2aa23ecd", "6d77508caf7326aab91edeb9306956eefe7fd688f2b1ea721f94c5d60d052a65", "dd78d430659094c545911e396effb8bd1e8b45a77f891a0cea7f839f55ca6eda", "0ab12bdfee8ba4eb4eed2fde34db978691c8ad449e395a7b5f9a17dfff11ec65", "2955057c2b9cb3a42e901ea8477d67de7a87ec34c3b1db4fc1319e75d53da7aa", "882d10823d870022ecfafdadb45c0979bf31369cf2563e3b31a3bafd5c3cf937", "24afc5319b7474975e5ff8eac45545acfef107a59e82c2e9f5ca97dbd48b78fa", "76df954c3d202fe6b07ae2894f59501433338c22a15c2e5523fefeb81d6055d8", "6e568a593e6af9259240089f92988202f3fa76fa49f6edeea49d593fdb364b0c", "e4dab225670a1ad534e772580a838ca2436d9e5c396712509e5b294af7d496aa", "cec9dffcbe3641360255d96f7a61bc88ce1c248efbed17b8584ad4aa46fc330b"],
  'lighthouse': ["e091dd7d01882c12e7758934580f30887d8d4c24571b51240fbfd3315f25a451", "fb8519e66297b3833fe28310709017169527380f03444f33bf47bd9aac55b901", "01d685a669d1e413154f32a3e2dce8765904cabc190583dfa76e7550a44cf896", "6fdfd97c5a8f93248a9ed15b2e1c8e90870e3b250af47babbd151dfbdd67e936", "35cf6aa8b222b9dd402a93a0990a6d4fa156a002032132e142a863d50afed414", "8593ad40f6a9b10c8bf354462b5c8f65e9fcf3f375385934718eb8262cba96ea", "43c923a39eefd5ac9ee185c835c67ede2423b103ad70d6c321a9f407db127ddb", "28352c0942d0b5267a9dcd04d944231e4103a9141465f2f48dce9981f9880efb", "a56f543ce9de98074d870d25827156a49d1be0b97feb03a6ba02f95a12c291b4", "96d6ebbfa1e2c483e802ab7d9c5a6e3d2a70242bb6f8ee0e77974901c74d6ca3", "8867ac197d9a312606704c053741ce4fb049bd4c41b6e3c83e18b4c9cc9621a5", "545e583e6093a64505f549ef1bda83f92d9c462dd61c6550732641fa5153f9e1", "d3f6d9c84824fbc3f2894bb9037b8c85907e1c26cecc415fcec9ed3035fc70af", "70043560a60a5f59bd57d134ed5fdec2b6c666b6aeb0d25389870a5dcbda9ac7", "8ee2db04b409f1b37948064549c2a03782f6cedc5a913ff5978f9302e1c0db02", "bab8fa74f7b02f5b263123d92c4beaf50dbd76209615dacb7b9e1479c8707914", "e15e56285f29ecb298da420dd0f46b01b703e3a65f1912d9ca6bbfaaf746d802", "6a71b4abe8d18b81e080d3af68904c3a57ba9d6c6474cda3f8c3a08952902161", "061e69cc1dda3052e3451ad2615659d460375840d57cf71ab6ba8f15a93933cf", "68c9d8836444e59e0fff0cee047a8c16ec593d5354ae9c9d23218c04fcf94c91"],
  'morphlink': ["c6a41744a9a6b138d401fce3109425f50bfff97d9b156fa1e374758a68b91751", "b94d2a5d2710ef31a99089ea18031d2d944497a383ef103b425beabe98da97b0", "0cc08a3a0ba304e00463b55b749e46826e40f5f059b31eee2c3ef645bea0aa04", "fbb9c0b0108fab6b65a30aa7bca936ef7b15b7da1a4bd055de6fa0b6eb39ad8d", "a59fd2fd58197020d01587f74926e15dd6ac8002fb9acba9c89c92ede017c12b", "132b58abe9583b61e7119c712949082c9e6733b7937e4e0c961c57a1dd10bfd9", "d370752f6bb82bd20e29cb48611b601de43418ff9e3a054d351b221e6479f6b0", "8562cd615ddead1882338b9bf99e9437b29b2983934c5025aa8315288968371c", "f2735037a9ba9fadc1b7b8a5e2e0d0e7cbba61aeb38d21b6fa720a221e8d9339", "ccc018e4c58c61f5d8943ddacfc4312597dddf6bfff4f13605bac26a70018bfc", "e36dd94f01677ba2d8f3d6c80a21940a8eccb470ca8c7ad1ba477c2b7becccb1", "aff1ca5d836b125dac8ccdad32dfbf0512ddb6b0ad479801352061704db50a9c", "2041483f7d2ac191e0f6df8b23036f13bca807f67157993cbeb023f551ffa8c5", "b69ad41d187e48a652b9ad4970e3abc16801c7201accbb0bbb2b7a30372ed1f5", "6eaa87fd4dce8fa8e960c981b61d185e78aef71070714dbf6c53a60933f10695", "93be47e4b0156eeb6042e80855f65ec3e62e0e82e6a28c1021c031cb4cb804a8", "fc42420f7a9560a65ae9aed525279655bfa059e792c1cce2d14fbc5a852ccea6", "1faacb24944d0b5bc8da2b0a11b2231fc09f3e43d59b59940129fd9b536a2044", "e3aec9bfa531216e7c55d13ce30eae5d0d32c90addcbd583272b58bb62ec96bd", "724f9ab5d62027d141c68745b056cd7564eadcfb5c1e6e067bc2365f470920a0"],
  'pocket-pixel-rumble': ["1256f36ce1a054c4186eb7016cebfbab1a4bca17df59a5cbf1bf9ee520297a99", "7c81989eefa0a125737d8b63c28eb8f3dcdc50cfe062919931ef2f72996c89d1", "77c0ac4d2c70a9a26251a65006cefe42aa5c9440653efb2508ca0ca70fcfa91d", "ecde1a250c32cf5a1651493cd0e36619d4820e608f945c878c408cd765e2a45b", "38ccb03892790ca8b5f9b57198cf5dff800fb18947cb1f6e68871b8d90c23221", "d0e3d984e5ef5455d94072b91dc7fb1f262f6523ecb728a76c727873f068729e", "a2649fcb6adb16dc2800a2f9f482e2abf638a9d92b6c0fb63a1c95c2bedb5f6a", "fe37991f4cbffb41f4545a7cc50f4bdee846304a7a417fb7386f974647aa431b", "d16bdf8f26080a08ad3f12c118857a38fa273bf8fbc0f4b6c06d20972fa86e02", "2e292530ef11a36540ffe9300d0838aa8dd77b965de0f70ed3623336657a5713", "58475bfb28c1bead0c6379ed2e8a725128654675ba41e8f49d9b43e4519ae870", "a6c4f05f2ce32eaa614b6768dd6c8375ede9a91c619f49278ce51773ea06e388", "ebad5b0120dc25f7018b1b505af3857107eb73d8632545d041aa6941cb0e307e", "4f3fff58f875660d5a3ab55583ed3378b60b0a5ba1d3f8fd86c7940484b3187d", "260556af0e6813e207580c79526e47f5b7ad9003388e82b88e3852e5200e6b20", "de70d0d6e154146e4bb0bbc69fe506334c5562416b5ef651b3eb76228ce1df42", "437a79ee2773fcadb196b2e80e84149723e064c69b67274a771aa7356364c61f", "d5c604202c9d036a2a95e375b6abfc083c7b65f5e1723258e24bb07961f4e7d5", "0e82597a447c359209f318d5619200071cda032c21f4b2bfe8d08dccad4e7686", "fcbc1ba4bf1ec82e1c0c5e09b8af585e5ad348b4877d3a4b1e781a65fc47fea7"],
  'singer': ["f5791c4a07652cf679a61392e27c17e657ef23de2100cc6b52411beb41444162", "873a0f6310713d2b7e3fc4158a37fae37e8c375ccb18852ba31cac07b12c9ebb", "83fe782628e9a023a3382726ba5eeefda7e2240548f2e0c8be162c3b7a81fcae", "ac44af60f98f074b71c7d9e0449a717d96202a42b4a66f91b7dc82d6ae8b6925", "182f25fdeeda22b863487b40c08b32efc9827150417b3c7966d2e4f1fd388add", "e7d3792e0ba1d05cbfe96988d88bc38efdf801b0ee2506d355c2c4f4f546d10c", "9b99c66d5ec75e4cfaa6d5c8053595180c2996469d25c1e984f99601d7de3e74", "fb387c85f3127013d373f73020f8a5576b99957e284a7d31ea7e14d56d7fd49c", "bec575b5001e0aab7c7e142015ae3e6f1afda609137d7b9e63035d82bccc7d17", "3b604c63459d5733e70608575f62a48af17c1fd6357e328774eea2a4f3c0e2fd", "19228387fd70c0447569a69c49deac022bc5d958004ccf148dcccd8264d52c3d", "11ae0f84b50406a036a1194409ce727fac1890734f27f99bb6a8f44cb50e95cc", "85ebc22f16528f24be1a4df278d4b22e720df44ed40a32be8980b0e570791e6c", "7203300c85a4a7770d2bab5ae8ac169bb2b31abff4fd570b8020dba236d008ad", "897564756e7afbaea4bbc350edcc1b1fbf8500bed2df39433f126023b1474909", "12d166258af96f7b7de2b2158e838996671494af15ee45675dd5d573dc23dbe9", "486e4c0185d6ccfba588aa617b5633de4a84385ce58113f997c029088986d1ba", "58f53fb0e316fdd14a065e721fd8f10bb2f962f3036cae4fe212ff8ab1c60070", "f866c65df5a4217c145af3a9abe177ee03a7e0b763d736e7e1800bda85038a58", "bf404fba3f6c74d87ace0c4cd42f7bd55e436685cf11bc3bc8b856554df0f5a5"],
  'soccer': ["932c6721062c17d37d7b691f74105ae5bd4acaa7b1c62b098a6cbf59f86994c0", "39bea1c4d81eba061547dfe5570bf70c9d279579ef150064857e48e4b7ebac4e", "9e3513c6398a45eec24fc20071f29ab55ef1722a72a2a68385180bb638574945", "ea7609a0db214b0432e36543aa993cabed6289f3f8e554d8e1f2c4d1d06e8db1", "28d85235407e9796602d7be069f3a0d6e141f0fcf85aa6553d52ad7f578b3acc", "75ff9563081dfc4601141b0db6272c9ba7109b9a0ba7bd94d79e5e3aa3408197", "79ae2042b36a81d21c640dcf7397495b66964e988222d57dddaf601538ad7dcd", "c0790c99d132b81e41a618c92070fe31e98aa7eb8ee7019e177f74ade833cc09", "2e5d697dc829c86e44a5b71c79f0639878ef310635e5a0feef9738c719318fa1", "9d357dbeb91df8dccd47e67a9c9befdac1a63109653b38323c955523e444943c", "08266b4701f4aa580aacfc14c2878dcd452a9e2d1052a631af31a1a45b10f768", "6fdff4da79d89a9d90d52bc5404c6f2f500eb13895797941727e64766636f164", "8a4cd914d72fee923c77c1dbc9b965bfdea8ff27afa260e3e3942323f5bbe57c", "950cb7e331303469aa9371e6c6ac5f7b226e8ac5cf92ca6ba1e4bc0048b91531", "20e147ca2f704f13a421134fbcc7c0d2fd85592c1a6adf00d164e6af823824e0", "4523da8e21fde7b8bce4f294d777271acdc2da266bcaa3de6bbc08925f91afa5", "99d42825008ff9d1c3f9af6fa1e3cee40f528e50bce5fd2320776c8064e25b9f", "43d83f65d28ed52caa2b0ee328a8ab157ab1e866b60d16a5486b59cf43fb36c4", "f6eefb8f277f99c05eadbcd38f2927bd42616de8007cde6e0fc2ba77768db6cd", "162e219997e7db92c6aac27df5f0c1378e4162c1c3af0948db0b6ae76f2b322b"],
  'swamp': ["d192a18b99531843de84559a8c4c287627603287f3c9b88505719a89632185a9", "b51827e3b26e881684a62db7e3f57189335f0020ae342600a7cd0e59a9f0cc69", "873be5f7c5d8a111d0976f5eb57e896a11af83357603babcc9c9c3ec98c2a8f1", "5393cf14251e0e66852334680cf1f5fe9450b1184d6dea3e846268805a1ab2ec", "a02cf26eb212938fdb873fcfe6066014d4141c4f24928a44a4e09df55ed15065", "88475293a7a3718cce180ca4a60f18003ec243af8dc0f59e2c60069efd946382", "4fc505f16fd2fa5992f10189ebe32b46800eb129567467f4a0f819d7d1435fd5", "5de286b7f2c1325dae5017c700a6c921bf903385b17f54b3f10a5f2848784819", "5380396ec1761ab9fb0591e2f0d8d66e2bd9fec56acae6af8e9be5862b101ad6", "d6f3da76f9b868b61ade23302c3c65e7b5730756d92916d55cced29482132a20", "a03be70e368aef44aed14d454796c181c8a2564f5761b58b700a837494229b80", "0ccbe9bf8c847ce6f1dfc80c548e489240ebd7769798ada127888e115d264928", "c1ef07cad37719113cb4ffd9d1ec05eae6eb4728ad3b3ad39e3937c7985bef58", "240dfe5f9929e4981477dfe260e500d0b27c0313fb780911bf15ee9ba3367d96", "651d07573fcc6a0ac7621bcbbf09aaf91084f561ac995ec31c04cc0d22ca08af", "868124e3f84ba8d6872df735e92858ab93ad14f34c09a3479d9c359ccc7ab7b2", "8716d3f36d98e673a3c873521ce73ad470e8231d156d94aee8265637a7c355d2", "35fd1dae23b3bbd71f017d0e756e52d3c18ea1e012164b75dbc3408f6528cf11", "75971dd949dc0052356002b367dfa3630a2b8260f465a2f729cd2cebf776fd8a", "0aacdf8ffd8e4253c45389a8f024d6292c429d9016f4a4553e8d09920a495f0b"],
  'tumbleweed-ranger': ["be2f070d62b2d323a376c9f5e7d1e35ca909e5c98283f9e2ba7ff6f64bb70544", "3b7c669d59048e0f2b2b9c0bc7a7f347e5d73dd8fafc135abf41f6e40b368877", "acd2ecd54ef4c1d66e7f6d77b5c3587def4200de6b522ae10843e873188f4f5e", "9211c6650292d33087f48c22992ef0623dd3f6c814a417e7cab5bb7a46baa7bf", "cc06036e71115abeac49a0d31f43d2c58d624fd2fb7db5ba4ba20cd028df04b1", "17c764201dbbf1df1427101e4227e59fc9621c19757b5d5bc8be86298f852dad", "d27230daae7e48da17e6a460a96d7e8b8f12df5e89f8f997a81c31d33d79671b", "31f2982c9c247a15944529d3acd3a9f355cbbbf2613f0e03ed066b643d6761ab", "bd0051a530f62fe3013030ae0c95f9eabac529515f80b09afbd5d72176cfb5f3", "3e56725906298b3887d8842f858bfbc13be574150b92929c796934f045becc13", "f053489338830d443f3755c281d6304db179fc2aaf3bb8029cdd7a6ef868c958", "6c3eb479dd7b275e3c5720dd1a3378d84135434765951b115a15e543f03c237e", "eea1f19d054651a59fddc267d687a4ea43c957fa7133efd11d3a4899309c199d", "e128191d8a6f86ba024754842cf6940e56894958367745b2c763cc5b42d67ff6", "ceaa694380d809c936f83e36719a7ae7cbb9209705296bd43184b1eda849d551", "b22445fa9f741ebfb4e5e1f3a3e82103de9e444ada06c9a97361d40adec8813d", "60fefa12208aa1dd640280a29cddd8297968424dc76b65ff70e71094abe4dc8f", "e41aadb283252c694e96b09b11169c3054af210d7e9d0fd9ac72f57277ae76d9", "df04518ec81e5ee464c432b1d491db7a12d9639597bcee98b1fa74359ddbe113", "a5be57224e56db5ba07335365625c3a8e43753937cf5ef395629fdc5b849b373"]
};
(function () {
  'use strict';
  var me = document.currentScript || document.querySelector('script[data-game-id]');
  if (!me) return;
  var gid = me.getAttribute('data-game-id'), gname = me.getAttribute('data-game-name') || gid;
  var KEY = 'arcadeUnlocked:' + gid;
  var qs = new URLSearchParams(location.search);
  // Test override: window.PAYWALL_FORCE = true (set before load) or ?paywall=force
  var forced = window.PAYWALL_FORCE === true || qs.get('paywall') === 'force';
  var enabled = PAYWALL_ENABLED || forced;

  function normalise(s) {
    return String(s || '').trim().toUpperCase()
      .replace(/[\s\u002D\u2010-\u2015\u2212\uFE58\uFE63\uFF0D_]+/g, '-')
      .replace(/-+/g, '-');
  }
  function sha256js(str) {
    function R(n, x) { return (x >>> n) | (x << (32 - n)); }
    var K = [], H = [], p = 0, c = 2;
    while (p < 64) { var ok = true; for (var d = 2; d * d <= c; d++) if (c % d === 0) { ok = false; break; }
      if (ok) { if (p < 8) H[p] = (Math.pow(c, 1 / 2) * 4294967296) | 0; K[p++] = (Math.pow(c, 1 / 3) * 4294967296) | 0; } c++; }
    var b = unescape(encodeURIComponent(str)), l = b.length * 8, w = [];
    b += '\x80'; while (b.length % 64 !== 56) b += '\x00';
    for (var i = 0; i < b.length; i++) w[i >> 2] |= b.charCodeAt(i) << ((3 - i) % 4) * 8;
    w[w.length] = (l / 4294967296) | 0; w[w.length] = l | 0;
    for (var j = 0; j < w.length; j += 16) {
      var W = w.slice(j, j + 16), h = H.slice(0);
      for (i = 0; i < 64; i++) {
        if (i >= 16) { var a = W[i - 15], e = W[i - 2];
          W[i] = (W[i - 16] + (R(7, a) ^ R(18, a) ^ (a >>> 3)) + W[i - 7] + (R(17, e) ^ R(19, e) ^ (e >>> 10))) | 0; }
        var t1 = h[7] + (R(6, h[4]) ^ R(11, h[4]) ^ R(25, h[4])) + ((h[4] & h[5]) ^ (~h[4] & h[6])) + K[i] + W[i];
        var t2 = (R(2, h[0]) ^ R(13, h[0]) ^ R(22, h[0])) + ((h[0] & h[1]) ^ (h[0] & h[2]) ^ (h[1] & h[2]));
        h = [(t1 + t2) | 0].concat(h); h[4] = (h[4] + t1) | 0; h.length = 8;
      }
      for (i = 0; i < 8; i++) H[i] = (H[i] + h[i]) | 0;
    }
    var o = ''; for (i = 0; i < 8; i++) o += ('00000000' + (H[i] >>> 0).toString(16)).slice(-8);
    return o;
  }
  function sha256(s) {
    if (window.crypto && crypto.subtle && window.TextEncoder) {
      return crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)).then(function (buf) {
        return Array.prototype.map.call(new Uint8Array(buf), function (x) { return ('0' + x.toString(16)).slice(-2); }).join('');
      }).catch(function () { return sha256js(s); });
    }
    return Promise.resolve(sha256js(s));
  }
  window.PAYWALL_SHA256_JS = sha256js; window.PAYWALL_NORMALISE = normalise;

  function isUnlocked() { try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; } }
  function setUnlocked() { try { localStorage.setItem(KEY, '1'); } catch (e) {} }

  var overlay;
  var wanted = false, styleEl;
  function close() { wanted = false; if (overlay) { overlay.remove(); overlay = null; } }
  function show() {
    wanted = true;
    if (overlay) return;
    var css = styleEl = document.createElement('style');
    css.textContent = '#arcade-paywall{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(8,6,20,.92);font:16px/1.4 system-ui,sans-serif;color:#fff}' +
      '#arcade-paywall .pw-card{background:linear-gradient(160deg,#2a1f4f,#14102a);border:1px solid #5b4b9a;border-radius:16px;padding:28px 24px;max-width:360px;width:90%;text-align:center;box-shadow:0 10px 40px #000a}' +
      '#arcade-paywall h2{margin:0 0 6px;font-size:22px}#arcade-paywall .pw-price{color:#ffd166;margin-bottom:18px}' +
      '#arcade-paywall .pw-buy{display:block;background:#635bff;color:#fff;text-decoration:none;padding:12px;border-radius:10px;font-weight:700;margin-bottom:16px}' +
      '#arcade-paywall input{width:100%;box-sizing:border-box;padding:10px;border-radius:8px;border:1px solid #5b4b9a;background:#0d0a1d;color:#fff;font-size:16px;text-transform:uppercase}' +
      '#arcade-paywall button{margin-top:8px;width:100%;padding:10px;border:0;border-radius:8px;background:#06d6a0;color:#000;font-weight:700;font-size:16px;cursor:pointer}' +
      '#arcade-paywall .pw-msg{min-height:1.4em;margin-top:8px;font-size:14px}#arcade-paywall .pw-close{background:none;color:#aaa;font-weight:400}';
    overlay = document.createElement('div'); overlay.id = 'arcade-paywall';
    overlay.innerHTML = '<div class="pw-card"><h2></h2><div class="pw-price">$5 USD</div>' +
      '<a class="pw-buy" target="_blank" rel="noopener">Buy with Stripe</a>' +
      '<form><input class="pw-code" placeholder="Enter unlock code" autocomplete="off" aria-label="Enter unlock code">' +
      '<button type="submit">Unlock</button></form><div class="pw-msg" role="status"></div></div>';
    overlay.querySelector('h2').textContent = gname + ', $5 USD';
    overlay.querySelector('.pw-price').textContent = 'One-time purchase';
    var buy = overlay.querySelector('.pw-buy'), link = PAYMENT_LINKS[gid];
    if (link && link !== 'STRIPE_LINK_PLACEHOLDER') buy.href = link;
    else buy.addEventListener('click', function (e) { e.preventDefault(); msg.textContent = 'Checkout coming soon.'; });
    var msg = overlay.querySelector('.pw-msg');
    if (!enabled) {
      var x = document.createElement('button'); x.className = 'pw-close'; x.textContent = 'Close (test mode)';
      x.onclick = close; overlay.querySelector('.pw-card').appendChild(x);
    }
    overlay.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      var code = normalise(overlay.querySelector('.pw-code').value);
      if (!code) return;
      sha256(code).then(function (h) {
        if (h === PAYWALL_OWNER_HASH || (PAYWALL_GAME_HASHES[gid] || []).indexOf(h) >= 0) {
          setUnlocked(); msg.style.color = '#06d6a0'; msg.textContent = 'Unlocked!'; setTimeout(close, 600);
        } else { msg.style.color = '#ef476f'; msg.textContent = 'That code is not valid for this game.'; }
      });
    });
    (document.head || document.documentElement).appendChild(css);
    document.body.appendChild(overlay);
  }
  window.ArcadePaywall = { show: show, isUnlocked: isUnlocked, gameId: gid };
  function init() {
    if ((enabled && !isUnlocked()) || qs.has('unlock')) show();
    // Some games replace the whole document after loading (document.open/write);
    // rebuild the overlay if it gets wiped while still needed.
    setInterval(function () {
      if (wanted && overlay && document.body && !document.body.contains(overlay)) {
        // document.open() strips listeners, so rebuild the overlay from scratch.
        overlay = null; if (styleEl) styleEl.remove(); show();
      }
    }, 300);
  }
  if (document.body) init(); else document.addEventListener('DOMContentLoaded', init);
})();
