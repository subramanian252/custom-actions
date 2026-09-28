import * as core from '@actions/core'
import * as github from '@actions/github'
import * as exec from '@actions/exec'


function run() {

    const bucket = core.getInput('bucket', { required: true })
    const bucketRegion = core.getInput('bucket-region', { required: true })
    const distFolder = core.getInput('dist-folder', { required: true })

    exec.exec(`aws s3 sync ${distFolder} s3://${bucket} --region ${bucketRegion}`)

    const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`
    core.setOutput('deployed-url', websiteUrl)
}

run();