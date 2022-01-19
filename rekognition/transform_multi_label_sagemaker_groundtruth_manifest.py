#!/usr/bin/env python
# coding: utf-8

# From this url
# https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/md-gt-cl-transform.html

import json


#you can set job_name to anything containing alphanumical characters and '-'s
job_name = 'image-label-attribute-name'

#ground_truth_manifest_file should be set to the name of your existing manifest file, including the relative path.
ground_truth_manifest_file = 'examplefromdocumentation.manifest'

#new_manifest_file is a new file that will be created containing the proper format accepted by Amazon Rekognition Custom Labels
new_manifest_file = 'new-examplefromdocumentation.manifest'


#first we want to read the existing lines from the sagemaker groundtruth manifest file into memory
with open(ground_truth_manifest_file) as f:
    lines = f.readlines()


#now we will iterate through the lines one at a time to generate the new lines for the updated manifest file
with open(new_manifest_file, 'w') as the_new_file:
    for line in lines:
        
        #first load in the old json item from the groundtruth manifest file
        old_json = json.loads(line)
        new_json = {}
        
        #set the location of the image
        new_json['source-ref'] = old_json['source-ref']
        
        #temporarily store the list of labels
        labels = old_json[job_name]
        
        #then we will iterate through the labels one by one and reformat them to the Custom Labels format
        for index, label in enumerate(labels):
            new_json[f'{job_name}{index}'] = index
            metadata = {}
            metadata['class-name'] = old_json[f'{job_name}-metadata']['class-map'][str(label)]
            metadata['confidence'] = old_json[f'{job_name}-metadata']['confidence-map'][str(label)]
            metadata['type'] = old_json[f'{job_name}-metadata']['type']
            metadata['job-name'] = old_json[f'{job_name}-metadata']['job-name']
            metadata['human-annotated'] = old_json[f'{job_name}-metadata']['human-annotated']
            metadata['creation-date'] = old_json[f'{job_name}-metadata']['creation-date']
            
            #add the metadata to new json line
            new_json[f'{job_name}{index}-metadata'] = metadata
            
        #write the current line to the json file
        the_new_file.write(json.dumps(new_json))
        the_new_file.write('\n')





