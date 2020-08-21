import json

RESUSCITATOR_EVENT_ID = 366

def main():
    print('> Starting Resuscitator formatting')
    formatted_output = {}
    addresses_list = []
    with open('original.json') as json_file:
        data = json.load(json_file)
        for each in data:
            addresses_list.append(each['eth1address'].lower())
            formatted_output[each['eth1address'].lower()] = [RESUSCITATOR_EVENT_ID, ]

    with open('output.json', 'w') as outfile:
        json.dump(formatted_output, outfile, indent=4)

    print('')
    print('>> Amount from original file:', len(data))
    print('>> Amount of addresses formatted:', len(formatted_output))
    amount_validation = 'SUCCESS' if len(formatted_output) == len(data) else 'ERROR'
    print('>>> Amount validation:', amount_validation)
    print('')

    duplicate_validation = 'SUCCESS' if len(formatted_output) == len(set(addresses_list)) else 'ERROR'
    print('>>> Duplicate address validation:', duplicate_validation)
    print('')

    print('> End of script')

if __name__ == '__main__':
    main()
