import * as core from '@actions/core'
import * as github from '@actions/github'
import * as exec from '@actions/exec'


function run() {

    const bucket = core.getInput('bucket', { required: true })
    const bucketRegion = core.getInput('bucket-region', { required: false, default: 'us-north-1' })
    const distFolder = core.getInput('dist-folder', { required: true })
    core.notice(`Deploying to bucket: ${bucket} in region: ${bucketRegion} from folder: ${distFolder}`)
}

run();