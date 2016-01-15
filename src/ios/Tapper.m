#import "Tapper.h"

@implementation Tapper

- (void)Sound:(CDVInvokedUrlCommand*)command
{

    AudioServicesPlaySystemSound(1104);

    [self success:result callbackId:callbackId];
}

@end
