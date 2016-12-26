# Database Server

Create an Amazon EC2 instance exposing port 5984 and SSH to the server using the supplied PEM file:

```
ssh -i ~/.ssh/spiritualisms-db.pem ec2-user@ec2-54-251-184-147.ap-southeast-1.compute.amazonaws.com
```

## Installation

Install and start docker:

```
sudo yum install -y docker ; sudo service docker start
```

Check the docker installation:

```
sudo docker ps
```

Create the directory on the host that will be the volume for the databases:

```
sudo mkdir -p /usr/local/var/lib/couchdb
```

Pull the `couchdb` tag from the ECR repository, see the [pull ecr guide](http://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html).

1. Configure the aws credentials `aws configure` and use the `spiritualisms` access key id and secret key.
2. Get the docker login command `aws ecr get-login --region ap-southeast-1`.
3. Execute the printed login command. Prefix the command with `sudo`.
4. Inspect the repositories: `aws ecr describe-repositories`.
5. List the images `aws ecr list-images --repository-name spiritualisms`
6. Pull the image using the `registryId` for `AWS_ACCOUNT_ID` printed in step 4.

```
sudo docker pull {AWS_ACCOUNT_ID}.dkr.ecr.ap-southeast-1.amazonaws.com/spiritualisms:couchdb
```

Check the images list:

```
sudo docker images
```

And run the image:

```
sudo docker run -d -p 5984:5984 -v /usr/local/var/lib/couchdb:/usr/local/var/lib/couchdb {IMAGE}:{TAG}
```

Add the image run command to `/etc/rc.local` so that the service is started when the machine boots.

Restart the machine `sudo reboot`, reconnect with SSH and verify the services are running:

```
ps ax | grep couchdb
```


You can then check the service with the [public IP address](http://54.251.184.147:5984/).

## DNS

Map the domain name `db.spiritualisms.org` to the IP address of the instance in Route53 so that the database is available via a hostname.

Wait for the DNS to propagate before proceeding.

## Bootstrap

You should have [rlx][] installed to bootstrap the default data.

Configure an alias `spiritualisms` pointing to `http://db.spiritualisms.org:5984` than create the database:

```
rlx db add quotes -s :spiritualisms
```

Now you can bootstrap the default database from the git repository:

```
rlx app push --no-auto-id -d quotes -s :spiritualisms -i app ./db/app
```

TODO: configure authentication

[rlx]: https://github.com/tmpfs/rlx