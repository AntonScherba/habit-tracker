import * as cdk from 'aws-cdk-lib';
import { RemovalPolicy } from 'aws-cdk-lib';
import { AllowedMethods, Distribution } from 'aws-cdk-lib/aws-cloudfront';
import { S3BucketOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const destinationBucket = new Bucket(this, 'StaticSiteBucket', {
      versioned: true,
      enforceSSL: true,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // new BucketDeployment(this, 'StaticSiteFilesDeployment', {
    //   destinationBucket,
    //   sources: [Source.asset('../frontend/out', { exclude: ['*.html', '404/*'] })],
    //   cacheControl: [
    //     CacheControl.maxAge(Duration.days(365)),
    //     CacheControl.immutable(),
    //   ],
    //   retainOnDelete: false,
    //   prune: false,
    // });

    // new BucketDeployment(this, 'HTMLSiteFilesDeployment', {
    //   destinationBucket,
    //   sources: [Source.asset('../frontend/out', { exclude: ['*', '!*.html'] })],
    //   cacheControl: [
    //     CacheControl.maxAge(Duration.seconds(60)),
    //     CacheControl.staleWhileRevalidate(Duration.days(30)),
    //   ],
    //   retainOnDelete: false,
    //   prune: false,
    // });

    const distribution = new Distribution(this, 'StaticSiteDistribution', {
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: S3BucketOrigin.withOriginAccessControl(destinationBucket),
        allowedMethods: AllowedMethods.ALLOW_ALL,
      }
    });

    new cdk.CfnOutput(this, 'CloudFrontURL', {
      value: distribution.domainName,
    });
  }
}
