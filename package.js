Package.describe({
  git: "https://github.com/tuandtb/legacy.git",
  name: "baotuan:active-route",
  summary: "Active route helpers",
  version: "2.3.3-rc.3"
});

Package.onUse(function(api) {
  api.versionsFrom(["1.0", "1.2"]);

  api.use(["check", "coffeescript", "reactive-dict", "underscore"]);

  api.use(
    [
      "kadira:flow-router@2.0.0",
      "meteorhacks:flow-router@1.8.0",
      "iron:router@1.0.0",
      "baotuan:flow-router-ssr@3.13.2",
      "templating"
    ],
    { weak: true }
  );

  api.export("ActiveRoute");

  api.addFiles("lib/activeroute.coffee");

  api.addFiles("client/helpers.coffee", "client");
});

Package.onTest(function(api) {
  api.versionsFrom(["1.0", "1.2"]);

  api.use([
    "check",
    "coffeescript",
    "reactive-dict",
    "templating",
    "underscore"
  ]);

  api.use([
    "practicalmeteor:mocha@2.1.0_5",
    "practicalmeteor:chai@2.1.0_1",
    "zimme:active-route"
  ]);

  api.addFiles(
    ["tests/client/activeroute.coffee", "tests/client/helpers.coffee"],
    "client"
  );

  api.addFiles("tests/server/activeroute.coffee", "server");
});
