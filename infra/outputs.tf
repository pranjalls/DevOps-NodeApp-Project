output "instance_public_ip" {
  value       = aws_eip.eip.public_ip
  description = "Public IP of the EC2 instance"
}
