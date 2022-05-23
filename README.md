# Deploying Lambdas with CDK - Bundling dependencies

Lambdas have dependencies, and sometimes we have to produce artifacts if they have dependencies and we are not using Lambda Layers. We can leverage the power of Docker to use a build runtime if we don't want to install locally in our machine those buildtools.

In this example we build locally a lambda written in Typescript using the Node Runtime Image from the CDK.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
