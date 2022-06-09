#!/bin/bash -xe

# bash update-frontend-R53.sh

# set -x


ECS_CLUSTER=JJCSA-ECS-ECSCluster-jqOzzc6Iso4e
ECS_Service=JJCSA-ECS-FrontendECSService-AXSrVhhtc0Vz
REGION=us-east-2
# JJCSearchDatabaseSecurityGroup=sg-0fb6f4e8e9cf43b99

# aws --profile jjcsaDD ecs list-cluster --region $REGION

ECS_taskArn=$(aws --profile jjcsaDD ecs list-tasks --cluster $ECS_CLUSTER --service $ECS_Service --region $REGION --query taskArns[] --output text)
echo ECS_taskArn=$ECS_taskArn

ECS_containerInstanceArn=$(aws --profile jjcsaDD ecs describe-tasks --cluster $ECS_CLUSTER --tasks $ECS_taskArn --region $REGION --query tasks[].containerInstanceArn --output text)
echo ECS_containerInstanceArn=$ECS_containerInstanceArn

ECS_ec2InstanceId=$(aws --profile jjcsaDD ecs describe-container-instances --cluster $ECS_CLUSTER --container-instances $ECS_containerInstanceArn --query containerInstances[].ec2InstanceId --output text)
echo ECS_ec2InstanceId=$ECS_ec2InstanceId

### EC2
EC2_Instances_PublicIpAddress=$(aws --profile jjcsaDD ec2 describe-instances --instance-ids $ECS_ec2InstanceId --region $REGION --query Reservations[].Instances[].PublicIpAddress --output text)
echo EC2_Instances_PublicIpAddress=$EC2_Instances_PublicIpAddress

# OLD_IP=$(aws --profile jjcsearchDD ec2 describe-security-groups --group-ids $JJCSearchDatabaseSecurityGroup --query 'SecurityGroups[].IpPermissions[?FromPort==`3306`].IpRanges[*].CidrIp' --output text --region $REGION)
# echo OLD_IP=$OLD_IP

# printf '[{"name":"%s","imageUri":"%s"}]' "$BackendServiceName" "$IMAGE_URI" > BackendImageDefinitions.json
cat R53-ResourceRecordSet.json | sed "s|EC2_Instances_PublicIpAddress|$EC2_Instances_PublicIpAddress|" > good-R53-ResourceRecordSet.json
# aws --profile jjcsaDD route53 change-resource-record-sets --hosted-zone-id Z067450823SKENMR8PVHI --change-batch file://good-R53-ResourceRecordSet.json

# NEW_IP=$(aws --profile jjcsearchDD ec2 describe-security-groups --group-ids $(echo $JJCSearchDatabaseSecurityGroup) --query 'SecurityGroups[].IpPermissions[?FromPort==`3306`].IpRanges[*].CidrIp' --output text --region $REGION)
# echo NEW_IP=$NEW_IP



